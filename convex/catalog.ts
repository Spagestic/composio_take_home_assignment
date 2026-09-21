import { internalQuery, mutation, query } from "./_generated/server"
import { v } from "convex/values"
import catalogData from "./catalogManifest.json"
import { catalogBaselineValidator } from "./schema"
import type { ComposioCatalogEntry } from "./catalogParser"

const entries = catalogData as ComposioCatalogEntry[]

export const seedCatalogBaseline = mutation({
  args: {
    force: v.optional(v.boolean()),
  },
  returns: v.object({
    inserted: v.number(),
    updated: v.number(),
    skipped: v.number(),
    totalInDb: v.number(),
  }),
  handler: async (ctx, args) => {
    let inserted = 0
    let updated = 0
    let skipped = 0

    for (const item of entries) {
      const existing = await ctx.db
        .query("composioCatalog")
        .withIndex("by_rank", (q) => q.eq("rank", item.rank))
        .unique()

      const payload = {
        rank: item.rank,
        appName: item.appName,
        inCatalog: item.inCatalog,
        absenceReason: item.absenceReason,
        composioSlug: item.composioSlug,
        composioToolkitKind: item.composioToolkitKind,
        canonicalDocsUrl: item.canonicalDocsUrl,
        snapshotPath: item.snapshotPath,
        snapshotVersion: item.snapshotVersion,
        composioCategory: item.composioCategory,
        composioAuth: item.composioAuth,
        composioOauthAvailable: item.composioOauthAvailable,
        toolCount: item.toolCount,
        triggerCount: item.triggerCount,
        headlineSummary: item.headlineSummary,
        updatedAt: Date.now(),
      }

      if (!existing) {
        await ctx.db.insert("composioCatalog", payload)
        inserted++
      } else if (args.force) {
        await ctx.db.patch(existing._id, payload)
        updated++
      } else {
        skipped++
      }
    }

    const totalInDb = (await ctx.db.query("composioCatalog").collect()).length

    return {
      inserted,
      updated,
      skipped,
      totalInDb,
    }
  },
})

export const getByRank = query({
  args: { rank: v.number() },
  returns: v.union(catalogBaselineValidator, v.null()),
  handler: async (ctx, args) => {
    const item = await ctx.db
      .query("composioCatalog")
      .withIndex("by_rank", (q) => q.eq("rank", args.rank))
      .unique()

    if (!item) return null

    return {
      rank: item.rank,
      appName: item.appName,
      inCatalog: item.inCatalog,
      absenceReason: item.absenceReason,
      composioSlug: item.composioSlug,
      composioToolkitKind: item.composioToolkitKind,
      canonicalDocsUrl: item.canonicalDocsUrl,
      snapshotPath: item.snapshotPath,
      snapshotVersion: item.snapshotVersion,
      composioCategory: item.composioCategory,
      composioAuth: item.composioAuth,
      composioOauthAvailable: item.composioOauthAvailable,
      toolCount: item.toolCount,
      triggerCount: item.triggerCount,
      headlineSummary: item.headlineSummary,
      updatedAt: item.updatedAt,
    }
  },
})

export const getByRankInternal = internalQuery({
  args: { rank: v.number() },
  returns: v.union(catalogBaselineValidator, v.null()),
  handler: async (ctx, args) => {
    const item = await ctx.db
      .query("composioCatalog")
      .withIndex("by_rank", (q) => q.eq("rank", args.rank))
      .unique()

    if (!item) return null

    return {
      rank: item.rank,
      appName: item.appName,
      inCatalog: item.inCatalog,
      absenceReason: item.absenceReason,
      composioSlug: item.composioSlug,
      composioToolkitKind: item.composioToolkitKind,
      canonicalDocsUrl: item.canonicalDocsUrl,
      snapshotPath: item.snapshotPath,
      snapshotVersion: item.snapshotVersion,
      composioCategory: item.composioCategory,
      composioAuth: item.composioAuth,
      composioOauthAvailable: item.composioOauthAvailable,
      toolCount: item.toolCount,
      triggerCount: item.triggerCount,
      headlineSummary: item.headlineSummary,
      updatedAt: item.updatedAt,
    }
  },
})

export const list = query({
  args: {},
  returns: v.array(catalogBaselineValidator),
  handler: async (ctx) => {
    const items = await ctx.db
      .query("composioCatalog")
      .withIndex("by_rank")
      .collect()

    return items.map((item) => ({
      rank: item.rank,
      appName: item.appName,
      inCatalog: item.inCatalog,
      absenceReason: item.absenceReason,
      composioSlug: item.composioSlug,
      composioToolkitKind: item.composioToolkitKind,
      canonicalDocsUrl: item.canonicalDocsUrl,
      snapshotPath: item.snapshotPath,
      snapshotVersion: item.snapshotVersion,
      composioCategory: item.composioCategory,
      composioAuth: item.composioAuth,
      composioOauthAvailable: item.composioOauthAvailable,
      toolCount: item.toolCount,
      triggerCount: item.triggerCount,
      headlineSummary: item.headlineSummary,
      updatedAt: item.updatedAt,
    }))
  },
})

export const getCatalogSummary = query({
  args: {},
  returns: v.object({
    totalApps: v.number(),
    inCatalogCount: v.number(),
    absentCount: v.number(),
    restToolkitCount: v.number(),
    mcpToolkitCount: v.number(),
    totalToolsDocumented: v.number(),
    totalTriggersDocumented: v.number(),
  }),
  handler: async (ctx) => {
    const all = await ctx.db.query("composioCatalog").collect()

    let inCatalogCount = 0
    let absentCount = 0
    let restToolkitCount = 0
    let mcpToolkitCount = 0
    let totalToolsDocumented = 0
    let totalTriggersDocumented = 0

    for (const item of all) {
      if (item.inCatalog) {
        inCatalogCount++
        if (item.composioToolkitKind === "rest") restToolkitCount++
        if (item.composioToolkitKind === "mcp") mcpToolkitCount++
        if (item.toolCount) totalToolsDocumented += item.toolCount
        if (item.triggerCount) totalTriggersDocumented += item.triggerCount
      } else {
        absentCount++
      }
    }

    return {
      totalApps: all.length,
      inCatalogCount,
      absentCount,
      restToolkitCount,
      mcpToolkitCount,
      totalToolsDocumented,
      totalTriggersDocumented,
    }
  },
})

export const getComparisonReport = query({
  args: {},
  returns: v.object({
    totalCompared: v.number(),
    inCatalogCount: v.number(),
    absentCount: v.number(),
    researchedCount: v.number(),
    authMatches: v.number(),
    authMismatches: v.number(),
    mcpMatches: v.number(),
    mcpMismatches: v.number(),
  }),
  handler: async (ctx) => {
    const catalogEntries = await ctx.db.query("composioCatalog").collect()
    const appsList = await ctx.db.query("apps").collect()

    let researchedCount = 0
    let authMatches = 0
    let authMismatches = 0
    let mcpMatches = 0
    let mcpMismatches = 0

    const catalogMap = new Map(catalogEntries.map((c) => [c.rank, c]))

    for (const app of appsList) {
      const isResearched = !!(app.buildability && app.researchStatus !== "failed")
      if (isResearched) researchedCount++

      const catalog = catalogMap.get(app.rank)
      if (catalog && catalog.inCatalog && isResearched) {
        const expectedAuth = catalog.composioAuth?.toUpperCase() ?? ""
        const agentAuth = (app.authMethods ?? []).map((m) => m.toUpperCase())

        let hasOverlap = false
        if (expectedAuth.includes("OAUTH") && agentAuth.includes("OAUTH2")) hasOverlap = true
        if (expectedAuth.includes("API_KEY") && agentAuth.includes("API_KEY")) hasOverlap = true
        if (expectedAuth.includes("BASIC") && agentAuth.includes("BASIC")) hasOverlap = true

        if (hasOverlap) {
          authMatches++
        } else {
          authMismatches++
        }

        if (catalog.composioToolkitKind === "mcp") {
          if (app.hasOfficialMcp === true) {
            mcpMatches++
          } else {
            mcpMismatches++
          }
        }
      }
    }

    return {
      totalCompared: appsList.length,
      inCatalogCount: catalogEntries.filter((c) => c.inCatalog).length,
      absentCount: catalogEntries.filter((c) => !c.inCatalog).length,
      researchedCount,
      authMatches,
      authMismatches,
      mcpMatches,
      mcpMismatches,
    }
  },
})

