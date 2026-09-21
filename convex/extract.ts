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
  citationsValidator,
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
