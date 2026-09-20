import { mutation } from "./_generated/server"
import { v } from "convex/values"
import { apps as initialApps } from "../components/table/data"

export const seed100Apps = mutation({
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

    for (const app of initialApps) {
      const existing = await ctx.db
        .query("apps")
        .withIndex("by_rank", (q) => q.eq("rank", app.rank))
        .unique()

      if (!existing) {
        await ctx.db.insert("apps", {
          rank: app.rank,
          name: app.name,
          website: app.website,
          category: app.category,
          oneLiner: app.oneLiner,
          authMethods: app.authMethods,
          access: app.access,
          apiStyles: app.apiStyles,
          apiBreadth: app.apiBreadth,
          hasOfficialMcp: app.hasOfficialMcp,
          buildability: app.buildability,
          blocker: app.blocker,
          docsUrl: app.docsUrl,
          evidenceNotes: app.evidenceNotes,
          composioInCatalog: app.composioInCatalog,
          composioSlug: app.composioSlug,
          composioToolkitKind: app.composioToolkitKind,
        })
        inserted++
      } else if (args.force) {
        await ctx.db.patch(existing._id, {
          name: app.name,
          website: app.website,
          category: app.category,
          composioInCatalog: app.composioInCatalog,
          composioSlug: app.composioSlug,
          composioToolkitKind: app.composioToolkitKind,
        })
        updated++
      } else {
        skipped++
      }
    }

    const totalInDb = (await ctx.db.query("apps").collect()).length

    return {
      inserted,
      updated,
      skipped,
      totalInDb,
    }
  },
})

export const seedAll = mutation({
  args: {
    force: v.optional(v.boolean()),
  },
  returns: v.object({
    appsSeeded: v.number(),
    catalogSeeded: v.number(),
    appsTotal: v.number(),
    catalogTotal: v.number(),
  }),
  handler: async (ctx, args) => {
    // 1. Seed base 100 apps
    let appsSeeded = 0
    for (const app of initialApps) {
      const existing = await ctx.db
        .query("apps")
        .withIndex("by_rank", (q) => q.eq("rank", app.rank))
        .unique()

      if (!existing) {
        await ctx.db.insert("apps", {
          rank: app.rank,
          name: app.name,
          website: app.website,
          category: app.category,
          oneLiner: app.oneLiner,
          authMethods: app.authMethods,
          access: app.access,
          apiStyles: app.apiStyles,
          apiBreadth: app.apiBreadth,
          hasOfficialMcp: app.hasOfficialMcp,
          buildability: app.buildability,
          blocker: app.blocker,
          docsUrl: app.docsUrl,
          evidenceNotes: app.evidenceNotes,
          composioInCatalog: app.composioInCatalog,
          composioSlug: app.composioSlug,
          composioToolkitKind: app.composioToolkitKind,
        })
        appsSeeded++
      } else if (args.force) {
        await ctx.db.patch(existing._id, {
          name: app.name,
          website: app.website,
          category: app.category,
          composioInCatalog: app.composioInCatalog,
          composioSlug: app.composioSlug,
          composioToolkitKind: app.composioToolkitKind,
        })
        appsSeeded++
      }
    }

    // 2. Seed Composio catalog baseline
    const { default: catalogData } = await import("./catalogManifest.json")
    let catalogSeeded = 0
    for (const item of catalogData as any[]) {
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
        catalogSeeded++
      } else if (args.force) {
        await ctx.db.patch(existing._id, payload)
        catalogSeeded++
      }
    }

    const appsTotal = (await ctx.db.query("apps").collect()).length
    const catalogTotal = (await ctx.db.query("composioCatalog").collect()).length

    return {
      appsSeeded,
      catalogSeeded,
      appsTotal,
      catalogTotal,
    }
  },
})

