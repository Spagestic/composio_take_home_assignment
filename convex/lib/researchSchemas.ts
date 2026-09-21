import { z } from "zod"

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
    .describe(
      "Whether an official or recognized Model Context Protocol (MCP) server exists for this tool."
    ),
  buildability: z
    .enum(["ready", "caveats", "blocked", "unknown"])
    .describe(
      "Can an AI agent toolkit be built today? 'ready' = public docs & clear auth; 'caveats' = minor hurdles or rate limits; 'blocked' = closed partner gate or no API."
    ),
  blocker: z
    .string()
    .nullable()
    .describe(
      "Main blocker or key constraint if not completely frictionless, else null."
    ),
  docsUrl: z
    .string()
    .nullable()
    .describe(
      "Direct URL to official developer documentation or API reference."
    ),
  evidenceNotes: z
    .string()
    .describe(
      "Concise proof/evidence summarizing why these conclusions were reached based on docs."
    ),
  citations: z
    .object({
      auth: z
        .string()
        .nullable()
        .optional()
        .describe("URL backing the authMethods finding"),
      access: z
        .string()
        .nullable()
        .optional()
        .describe("URL backing the access model finding"),
      apiSurface: z
        .string()
        .nullable()
        .optional()
        .describe("URL backing the API styles and breadth finding"),
      mcp: z
        .string()
        .nullable()
        .optional()
        .describe("URL backing the official MCP finding"),
      buildability: z
        .string()
        .nullable()
        .optional()
        .describe("URL backing the buildability verdict"),
    })
    .optional()
    .describe("Per-claim source URLs drawn from the provided search sources."),
})

export type ResearchExtraction = z.infer<typeof researchExtractionSchema>

export const verificationLlmSchema = z.object({
  confidence: z
    .enum(["high", "medium", "low"])
    .describe("Overall confidence in the findings given primary documentation"),
  summary: z
    .string()
    .describe(
      "A crisp 1-2 sentence assessment of factual agreement between findings and docs"
    ),
  fieldChecks: z
    .array(
      z.object({
        field: z
          .string()
          .describe(
            "Field checked, e.g. authMethods, access, apiStyles, hasOfficialMcp, buildability"
          ),
        original: z.string().describe("Original value string representation"),
        verified: z
          .boolean()
          .describe("Whether the primary docs confirm this field"),
        corrected: z
          .string()
          .nullable()
          .optional()
          .describe("Corrected value if original was inaccurate"),
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
})

export type VerificationExtraction = z.infer<typeof verificationLlmSchema>
