"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { z } from "zod";
import { generateStructured } from "./llm";
import {
  accessModelValidator,
  apiBreadthValidator,
  apiStyleValidator,
  authMethodValidator,
  buildabilityValidator,
  catalogComparisonStatusValidator,
  citationsValidator,
  fieldCheckValidator,
  verificationConfidenceValidator,
  verificationResultValidator,
} from "./schema";

export const researchExtractionSchema = z.object({
  oneLiner: z
    .string()
    .describe("One concise sentence explaining what this application does."),
  authMethods: z
    .array(z.enum(["oauth2", "api_key", "basic", "token", "other"]))
    .describe("Authentication methods supported by public developer API."),
  access: z
    .enum(["self_serve", "paid_plan", "admin_approval", "partnership", "unknown"])
    .describe(
      "Developer access gate: self_serve (free account / public keys), paid_plan (requires paid subscription), admin_approval (needs workspace/admin review), partnership (must contact sales / partner program)."
    ),
  apiStyles: z
    .array(z.enum(["rest", "graphql", "sdk", "mcp", "none", "unknown"]))
    .describe("Documented API architectures or interfaces available."),
  apiBreadth: z
    .enum(["thin", "moderate", "broad", "unknown"])
    .describe("Breadth of the documented API surface."),
  hasOfficialMcp: z
    .boolean()
    .describe("Whether an official or recognized Model Context Protocol (MCP) server exists for this tool."),
  buildability: z
    .enum(["ready", "caveats", "blocked", "unknown"])
    .describe(
      "Can an AI agent toolkit be built today? 'ready' = public docs & clear auth; 'caveats' = minor hurdles or rate limits; 'blocked' = closed partner gate or no API."
    ),
  blocker: z
    .string()
    .nullable()
    .describe("Main blocker or key constraint if not completely frictionless, else null."),
  docsUrl: z
    .string()
    .nullable()
    .describe("Direct URL to official developer documentation or API reference."),
  evidenceNotes: z
    .string()
    .describe("Concise proof/evidence summarizing why these conclusions were reached based on docs."),
  citations: z
    .object({
      auth: z.string().nullable().optional().describe("URL backing the authMethods finding"),
      access: z.string().nullable().optional().describe("URL backing the access model finding"),
      apiSurface: z.string().nullable().optional().describe("URL backing the API styles and breadth finding"),
      mcp: z.string().nullable().optional().describe("URL backing the official MCP finding"),
      buildability: z.string().nullable().optional().describe("URL backing the buildability verdict"),
    })
    .optional()
    .describe("Per-claim source URLs drawn from the provided search sources."),
});

export type ResearchExtraction = z.infer<typeof researchExtractionSchema>;

function isTransientLlmError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /rate limit|429|too many requests|quota|high demand|try again later|resource exhausted|overloaded|unavailable|503|529/i.test(
    message
  );
}

async function withSlowBackoff<T>(fn: () => Promise<T>): Promise<T> {
  const maxAttempts = 6;
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (!isTransientLlmError(error) || attempt === maxAttempts) {
        throw error;
      }
      const waitMs = Math.min(120_000, 15_000 * 2 ** (attempt - 1));
      console.warn(
        `Gemini overloaded or rate-limited (attempt ${attempt}/${maxAttempts}); waiting ${waitMs}ms`
      );
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }
  }

  throw lastError;
}

export const extractResearchFindings = internalAction({
  args: {
    name: v.string(),
    website: v.string(),
    category: v.string(),
    contextText: v.string(),
  },
  returns: v.object({
    oneLiner: v.string(),
    authMethods: v.array(authMethodValidator),
    access: accessModelValidator,
    apiStyles: v.array(apiStyleValidator),
    apiBreadth: apiBreadthValidator,
    hasOfficialMcp: v.boolean(),
    buildability: buildabilityValidator,
    blocker: v.union(v.string(), v.null()),
    docsUrl: v.union(v.string(), v.null()),
    evidenceNotes: v.string(),
    citations: v.optional(v.union(citationsValidator, v.null())),
  }),
  handler: async (_ctx, args) => {
    const prompt = `You are evaluating the app "${args.name}" (${args.website}, category: ${args.category}) as an AI agent toolkit candidate for Composio.

Here is gathered documentation context and search findings:
---
${args.contextText.slice(0, 20000)}
---

Analyze this context thoroughly and extract the exact structured evaluation findings matching the schema.
For citations, attribute each claim (auth, access, apiSurface, mcp, buildability) to the specific source URL from the context that best supports it.
Only return factual, verified conclusions supported by the documentation context.`;

    const findings = await withSlowBackoff(() =>
      generateStructured({
        schema: researchExtractionSchema,
        prompt,
        system:
          "You are an expert AI product ops and API integration engineer analyzing developer platforms for agent toolkits.",
        temperature: 0.1,
      })
    );

    return findings;
  },
});

export const verificationLlmSchema = z.object({
  confidence: z
    .enum(["high", "medium", "low"])
    .describe("Overall confidence in the findings given primary documentation"),
  summary: z
    .string()
    .describe("A crisp 1-2 sentence assessment of factual agreement between findings and docs"),
  fieldChecks: z
    .array(
      z.object({
        field: z.string().describe("Field checked, e.g. authMethods, access, apiStyles, hasOfficialMcp, buildability"),
        original: z.string().describe("Original value string representation"),
        verified: z.boolean().describe("Whether the primary docs confirm this field"),
        corrected: z.string().nullable().optional().describe("Corrected value if original was inaccurate"),
        note: z.string().describe("Brief justification citing the documentation"),
      })
    )
    .describe("Per-field cross-check against the primary documentation"),
  revisedAuthMethods: z
    .array(z.enum(["oauth2", "api_key", "basic", "token", "other"]))
    .optional()
    .describe("Corrected authMethods if original was flawed, else omitted"),
  revisedAccess: z
    .enum(["self_serve", "paid_plan", "admin_approval", "partnership", "unknown"])
    .optional()
    .describe("Corrected access model if original was flawed, else omitted"),
  revisedBuildability: z
    .enum(["ready", "caveats", "blocked", "unknown"])
    .optional()
    .describe("Corrected buildability if original was flawed, else omitted"),
});

export const verifyResearchFindings = internalAction({
  args: {
    name: v.string(),
    website: v.string(),
    category: v.string(),
    docsUrl: v.union(v.string(), v.null()),
    primaryDocsContent: v.string(),
    firstPassFindings: v.object({
      oneLiner: v.string(),
      authMethods: v.array(authMethodValidator),
      access: accessModelValidator,
      apiStyles: v.array(apiStyleValidator),
      apiBreadth: apiBreadthValidator,
      hasOfficialMcp: v.boolean(),
      buildability: buildabilityValidator,
      blocker: v.union(v.string(), v.null()),
    }),
  },
  returns: v.object({
    confidence: verificationConfidenceValidator,
    summary: v.string(),
    fieldChecks: v.array(fieldCheckValidator),
    revisedAuthMethods: v.optional(v.array(authMethodValidator)),
    revisedAccess: v.optional(accessModelValidator),
    revisedBuildability: v.optional(buildabilityValidator),
  }),
  handler: async (_ctx, args) => {
    const prompt = `You are a Senior Product Ops Quality Auditor verifying an AI agent's initial research findings on "${args.name}".

Initial Research Findings:
- One-liner: "${args.firstPassFindings.oneLiner}"
- Auth methods: ${JSON.stringify(args.firstPassFindings.authMethods)}
- Access model: ${args.firstPassFindings.access}
- API styles: ${JSON.stringify(args.firstPassFindings.apiStyles)}
- API breadth: ${args.firstPassFindings.apiBreadth}
- Has official MCP: ${args.firstPassFindings.hasOfficialMcp}
- Buildability: ${args.firstPassFindings.buildability}
- Blocker: ${args.firstPassFindings.blocker ?? "none"}

Primary Documentation Text (${args.docsUrl ?? "search snippet"}):
---
${args.primaryDocsContent.slice(0, 16000)}
---

Cross-check each field against the primary documentation.
- If primary documentation confirms the finding, mark verified=true.
- If primary documentation shows the agent hallucinated or got auth/access/buildability wrong, mark verified=false, provide the corrected value, and supply the revised enum in revisedAuthMethods/revisedAccess/revisedBuildability.
- Provide a realistic confidence (high / medium / low). If documentation is sparse, set medium or low.`;

    const result = await withSlowBackoff(() =>
      generateStructured({
        schema: verificationLlmSchema,
        prompt,
        system:
          "You are a rigorous verification auditor who catches hallucinations, confirms evidence, and rates factual confidence.",
        temperature: 0.1,
      })
    );

    return {
      confidence: result.confidence,
      summary: result.summary,
      fieldChecks: result.fieldChecks.map((f) => ({
        field: f.field,
        original: f.original,
        verified: f.verified,
        corrected: f.corrected ?? null,
        note: f.note,
      })),
      revisedAuthMethods: result.revisedAuthMethods,
      revisedAccess: result.revisedAccess,
      revisedBuildability: result.revisedBuildability,
    };
  },
});
