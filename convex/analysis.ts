import { v } from "convex/values"
import { query } from "./_generated/server"

const categoryLabels = v.union(
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

const accessBuckets = v.object({
  self_serve: v.number(),
  paid_plan: v.number(),
  admin_approval: v.number(),
  partnership: v.number(),
  unknown: v.number(),
  unresearched: v.number(),
})

const buildabilityBuckets = v.object({
  ready: v.number(),
  caveats: v.number(),
  blocked: v.number(),
  unknown: v.number(),
  unresearched: v.number(),
})

const emptyAccess = () => ({
  self_serve: 0,
  paid_plan: 0,
  admin_approval: 0,
  partnership: 0,
  unknown: 0,
  unresearched: 0,
})

const emptyBuildability = () => ({
  ready: 0,
  caveats: 0,
  blocked: 0,
  unknown: 0,
  unresearched: 0,
})

const categoryOrder = [
  "crm_sales",
  "support_helpdesk",
  "communications",
  "marketing",
  "ecommerce",
  "data_seo_scraping",
  "developer_infra",
  "productivity",
  "finance",
  "ai_research_media",
] as const

type Category = (typeof categoryOrder)[number]

export const patterns = query({
  args: {},
  returns: v.object({
    totals: v.object({
      apps: v.number(),
      completed: v.number(),
      failed: v.number(),
      active: v.number(),
      notStarted: v.number(),
    }),
    authMix: v.record(v.string(), v.number()),
    accessTotals: accessBuckets,
    accessByCategory: v.array(
      v.object({ category: categoryLabels, counts: accessBuckets })
    ),
    buildabilityTotals: buildabilityBuckets,
    buildabilityByCategory: v.array(
      v.object({ category: categoryLabels, counts: buildabilityBuckets })
    ),
    apiStyles: v.record(v.string(), v.number()),
    apiBreadth: v.record(v.string(), v.number()),
    officialMcpCount: v.number(),
    topBlockers: v.array(
      v.object({
        blocker: v.string(),
        count: v.number(),
        ranks: v.array(v.number()),
      })
    ),
    catalog: v.object({
      inCatalog: v.number(),
      absent: v.number(),
      match: v.number(),
      mismatch: v.number(),
      notApplicable: v.number(),
    }),
    easyWins: v.array(v.number()),
    outreachNeeded: v.array(v.number()),
    verification: v.object({
      confidence: v.object({
        high: v.number(),
        medium: v.number(),
        low: v.number(),
      }),
      fieldsChecked: v.number(),
      fieldsVerified: v.number(),
      appsWithCorrections: v.number(),
      totalCorrections: v.number(),
    }),
  }),
  handler: async (ctx) => {
    // The apps table is a fixed 100-row research set, so a bounded take is fine.
    const apps = await ctx.db.query("apps").withIndex("by_rank").take(200)

    const totals = {
      apps: apps.length,
      completed: 0,
      failed: 0,
      active: 0,
      notStarted: 0,
    }
    const authMix: Record<string, number> = {}
    const accessTotals = emptyAccess()
    const accessByCategory = new Map<Category, ReturnType<typeof emptyAccess>>()
    const buildabilityTotals = emptyBuildability()
    const buildabilityByCategory = new Map<
      Category,
      ReturnType<typeof emptyBuildability>
    >()
    const apiStyles: Record<string, number> = {}
    const apiBreadth: Record<string, number> = {}
    let officialMcpCount = 0
    const blockerGroups = new Map<string, { count: number; ranks: number[] }>()
    const catalog = {
      inCatalog: 0,
      absent: 0,
      match: 0,
      mismatch: 0,
      notApplicable: 0,
    }
    const easyWins: number[] = []
    const outreachNeeded: number[] = []
    const verification = {
      confidence: { high: 0, medium: 0, low: 0 },
      fieldsChecked: 0,
      fieldsVerified: 0,
      appsWithCorrections: 0,
      totalCorrections: 0,
    }

    const bump = (bag: Record<string, number>, key: string) => {
      bag[key] = (bag[key] ?? 0) + 1
    }

    for (const app of apps) {
      const status = app.researchStatus ?? "not_started"
      if (status === "completed") totals.completed += 1
      else if (status === "failed") totals.failed += 1
      else if (status === "queued" || status === "running") totals.active += 1
      else totals.notStarted += 1

      const researched = status === "completed" || app.buildability != null

      const category = app.category as Category
      const catAccess = accessByCategory.get(category) ?? emptyAccess()
      accessByCategory.set(category, catAccess)
      const catBuild =
        buildabilityByCategory.get(category) ?? emptyBuildability()
      buildabilityByCategory.set(category, catBuild)

      if (!researched) {
        catAccess.unresearched += 1
        catBuild.unresearched += 1
        accessTotals.unresearched += 1
        buildabilityTotals.unresearched += 1
      } else {
        const access = app.access ?? "unknown"
        accessTotals[access] += 1
        catAccess[access] += 1

        const buildability = app.buildability ?? "unknown"
        buildabilityTotals[buildability] += 1
        catBuild[buildability] += 1

        for (const method of app.authMethods ?? []) bump(authMix, method)
        for (const style of app.apiStyles ?? []) bump(apiStyles, style)
        bump(apiBreadth, app.apiBreadth ?? "unknown")

        if (app.hasOfficialMcp) officialMcpCount += 1

        if (
          buildability === "ready" &&
          access === "self_serve" &&
          (app.authMethods ?? []).includes("oauth2")
        ) {
          easyWins.push(app.rank)
        }
        if (access === "admin_approval" || access === "partnership") {
          outreachNeeded.push(app.rank)
        }

        if (app.blocker) {
          const key = app.blocker.trim().toLowerCase()
          const group = blockerGroups.get(key) ?? { count: 0, ranks: [] }
          group.count += 1
          group.ranks.push(app.rank)
          blockerGroups.set(key, group)
        }
      }

      if (app.composioInCatalog) catalog.inCatalog += 1
      else catalog.absent += 1

      const comparison = app.verification?.catalogComparison
      if (comparison === "match") catalog.match += 1
      else if (comparison === "mismatch") catalog.mismatch += 1
      else if (comparison === "not_applicable") catalog.notApplicable += 1

      if (app.verification) {
        verification.confidence[app.verification.confidence] += 1
        verification.totalCorrections += app.verification.correctionsApplied
        if (app.verification.correctionsApplied > 0) {
          verification.appsWithCorrections += 1
        }
        for (const check of app.verification.fieldChecks) {
          verification.fieldsChecked += 1
          if (check.verified) verification.fieldsVerified += 1
        }
      }
    }

    const topBlockers = [...blockerGroups.entries()]
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 15)
      .map(([blocker, group]) => ({
        blocker,
        count: group.count,
        ranks: group.ranks.sort((x, y) => x - y),
      }))

    const present = categoryOrder.filter(
      (category) =>
        accessByCategory.has(category) || buildabilityByCategory.has(category)
    )

    return {
      totals,
      authMix,
      accessTotals,
      accessByCategory: present.map((category) => ({
        category,
        counts: accessByCategory.get(category) ?? emptyAccess(),
      })),
      buildabilityTotals,
      buildabilityByCategory: present.map((category) => ({
        category,
        counts: buildabilityByCategory.get(category) ?? emptyBuildability(),
      })),
      apiStyles,
      apiBreadth,
      officialMcpCount,
      topBlockers,
      catalog,
      easyWins: easyWins.sort((a, b) => a - b),
      outreachNeeded: outreachNeeded.sort((a, b) => a - b),
      verification,
    }
  },
})