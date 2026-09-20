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
  composioInCatalog: v.boolean(),
  composioSlug: v.union(v.string(), v.null()),
  composioToolkitKind: v.union(composioToolkitKindValidator, v.null()),
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

    // Ground truth from README & Composio catalog
    composioInCatalog: v.boolean(),
    composioSlug: v.union(v.string(), v.null()),
    composioToolkitKind: v.union(composioToolkitKindValidator, v.null()),
  })
    .index("by_rank", ["rank"])
    .index("by_category", ["category"])
    .index("by_buildability", ["buildability"])
    .index("by_composioSlug", ["composioSlug"]),
})
