import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export const categoryValidator = v.union(
  v.literal("crm_sales"),
  v.literal("support_helpdesk"),
  v.literal("communications"),
  v.literal("marketing"),
  v.literal("ecommerce"),
  v.literal("data_seo_scraping"),
  v.literal("developer_infra"),
  v.literal("productivity"),
  v.literal("finance"),
  v.literal("ai_research_media")
)

export const authMethodValidator = v.union(
  v.literal("oauth2"),
  v.literal("api_key"),
  v.literal("basic"),
  v.literal("token"),
  v.literal("other")
)

export const accessModelValidator = v.union(
  v.literal("self_serve"),
  v.literal("paid_plan"),
  v.literal("admin_approval"),
  v.literal("partnership"),
  v.literal("unknown")
)

export const apiStyleValidator = v.union(
  v.literal("rest"),
  v.literal("graphql"),
  v.literal("sdk"),
  v.literal("mcp"),
  v.literal("none"),
  v.literal("unknown")
)

export const apiBreadthValidator = v.union(
  v.literal("thin"),
  v.literal("moderate"),
  v.literal("broad"),
  v.literal("unknown")
)

export const buildabilityValidator = v.union(
  v.literal("ready"),
  v.literal("caveats"),
  v.literal("blocked"),
  v.literal("unknown")
)

export const composioToolkitKindValidator = v.union(
  v.literal("rest"),
  v.literal("mcp")
)

export const catalogComparisonStatusValidator = v.union(
  v.literal("match"),
  v.literal("mismatch"),
  v.literal("not_researched"),
  v.literal("not_applicable")
)

export const verificationConfidenceValidator = v.union(
  v.literal("high"),
  v.literal("medium"),
  v.literal("low")
)

export const sourceItemValidator = v.object({
  title: v.string(),
  url: v.string(),
})

export const citationsValidator = v.object({
  auth: v.optional(v.union(v.string(), v.null())),
  access: v.optional(v.union(v.string(), v.null())),
  apiSurface: v.optional(v.union(v.string(), v.null())),
  mcp: v.optional(v.union(v.string(), v.null())),
  buildability: v.optional(v.union(v.string(), v.null())),
})

export const fieldCheckValidator = v.object({
  field: v.string(),
  original: v.string(),
  verified: v.boolean(),
  corrected: v.optional(v.union(v.string(), v.null())),
  note: v.string(),
})

export const verificationResultValidator = v.object({
  verifiedAt: v.number(),
  confidence: verificationConfidenceValidator,
  summary: v.string(),
  fieldChecks: v.array(fieldCheckValidator),
  catalogComparison: catalogComparisonStatusValidator,
  catalogNotes: v.optional(v.union(v.string(), v.null())),
  correctionsApplied: v.number(),
})

export const catalogBaselineValidator = v.object({
  rank: v.number(),
  appName: v.string(),
  inCatalog: v.boolean(),
  absenceReason: v.union(v.string(), v.null()),
  composioSlug: v.union(v.string(), v.null()),
  composioToolkitKind: v.union(composioToolkitKindValidator, v.null()),
  canonicalDocsUrl: v.union(v.string(), v.null()),
  snapshotPath: v.union(v.string(), v.null()),
  snapshotVersion: v.union(v.string(), v.null()),
  composioCategory: v.union(v.string(), v.null()),
  composioAuth: v.union(v.string(), v.null()),
  composioOauthAvailable: v.union(v.string(), v.null()),
  toolCount: v.union(v.number(), v.null()),
  triggerCount: v.union(v.number(), v.null()),
  headlineSummary: v.union(v.string(), v.null()),
  updatedAt: v.number(),
})

export const researchStatusValidator = v.union(
  v.literal("not_started"),
  v.literal("queued"),
  v.literal("running"),
  v.literal("completed"),
  v.literal("failed")
)

export const appDocValidator = v.object({
  _id: v.id("apps"),
  _creationTime: v.number(),
  rank: v.number(),
  name: v.string(),
  website: v.string(),
  category: categoryValidator,
  oneLiner: v.union(v.string(), v.null()),
  authMethods: v.union(v.array(authMethodValidator), v.null()),
  access: v.union(accessModelValidator, v.null()),
  apiStyles: v.union(v.array(apiStyleValidator), v.null()),
  apiBreadth: v.union(apiBreadthValidator, v.null()),
  hasOfficialMcp: v.union(v.boolean(), v.null()),
  buildability: v.union(buildabilityValidator, v.null()),
  blocker: v.union(v.string(), v.null()),
  docsUrl: v.union(v.string(), v.null()),
  evidenceNotes: v.union(v.string(), v.null()),
  sources: v.optional(v.union(v.array(sourceItemValidator), v.null())),
  citations: v.optional(v.union(citationsValidator, v.null())),
  verification: v.optional(v.union(verificationResultValidator, v.null())),
  composioInCatalog: v.boolean(),
  composioSlug: v.union(v.string(), v.null()),
  composioToolkitKind: v.union(composioToolkitKindValidator, v.null()),
  researchStatus: v.optional(researchStatusValidator),
  researchStartedAt: v.optional(v.union(v.number(), v.null())),
  researchCompletedAt: v.optional(v.union(v.number(), v.null())),
  researchError: v.optional(v.union(v.string(), v.null())),
  workflowId: v.optional(v.union(v.string(), v.null())),
  workflowIds: v.optional(v.array(v.string())),
})

export default defineSchema({
  apps: defineTable({
    rank: v.number(),
    name: v.string(),
    website: v.string(),
    category: categoryValidator,
    oneLiner: v.union(v.string(), v.null()),

    // Agent findings
    authMethods: v.union(v.array(authMethodValidator), v.null()),
    access: v.union(accessModelValidator, v.null()),
    apiStyles: v.union(v.array(apiStyleValidator), v.null()),
    apiBreadth: v.union(apiBreadthValidator, v.null()),
    hasOfficialMcp: v.union(v.boolean(), v.null()),
    buildability: v.union(buildabilityValidator, v.null()),
    blocker: v.union(v.string(), v.null()),
    docsUrl: v.union(v.string(), v.null()),
    evidenceNotes: v.union(v.string(), v.null()),
    sources: v.optional(v.union(v.array(sourceItemValidator), v.null())),
    citations: v.optional(v.union(citationsValidator, v.null())),
    verification: v.optional(v.union(verificationResultValidator, v.null())),

    // Ground truth from README & Composio catalog
    composioInCatalog: v.boolean(),
    composioSlug: v.union(v.string(), v.null()),
    composioToolkitKind: v.union(composioToolkitKindValidator, v.null()),

    // Research execution status
    researchStatus: v.optional(researchStatusValidator),
    researchStartedAt: v.optional(v.union(v.number(), v.null())),
    researchCompletedAt: v.optional(v.union(v.number(), v.null())),
    researchError: v.optional(v.union(v.string(), v.null())),
    workflowId: v.optional(v.union(v.string(), v.null())),
    workflowIds: v.optional(v.array(v.string())),
  })
    .index("by_rank", ["rank"])
    .index("by_category", ["category"])
    .index("by_buildability", ["buildability"])
    .index("by_composioSlug", ["composioSlug"])
    .index("by_researchStatus", ["researchStatus"]),

  composioCatalog: defineTable({
    rank: v.number(),
    appName: v.string(),
    inCatalog: v.boolean(),
    absenceReason: v.union(v.string(), v.null()),
    composioSlug: v.union(v.string(), v.null()),
    composioToolkitKind: v.union(composioToolkitKindValidator, v.null()),
    canonicalDocsUrl: v.union(v.string(), v.null()),
    snapshotPath: v.union(v.string(), v.null()),
    snapshotVersion: v.union(v.string(), v.null()),
    composioCategory: v.union(v.string(), v.null()),
    composioAuth: v.union(v.string(), v.null()),
    composioOauthAvailable: v.union(v.string(), v.null()),
    toolCount: v.union(v.number(), v.null()),
    triggerCount: v.union(v.number(), v.null()),
    headlineSummary: v.union(v.string(), v.null()),
    updatedAt: v.number(),
  })
    .index("by_rank", ["rank"])
    .index("by_inCatalog", ["inCatalog"])
    .index("by_composioSlug", ["composioSlug"]),

  chatMessages: defineTable({
    sessionId: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")),
    text: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("streaming"),
      v.literal("done"),
      v.literal("error")
    ),
    error: v.optional(v.string()),
  }).index("by_session", ["sessionId"]),
})
