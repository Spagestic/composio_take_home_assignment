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
});

export type ResearchExtraction = z.infer<typeof researchExtractionSchema>;

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
  }),
  handler: async (_ctx, args) => {
    const prompt = `You are evaluating the app "${args.name}" (${args.website}, category: ${args.category}) as an AI agent toolkit candidate for Composio.

Here is gathered documentation context and search findings:
---
${args.contextText.slice(0, 20000)}
---

Analyze this context thoroughly and extract the exact structured evaluation findings matching the schema.
Only return factual, verified conclusions supported by the documentation context.`;

    const findings = await generateStructured({
      schema: researchExtractionSchema,
      prompt,
      system:
        "You are an expert AI product ops and API integration engineer analyzing developer platforms for agent toolkits.",
      temperature: 0.1,
    });

    return findings;
  },
});
