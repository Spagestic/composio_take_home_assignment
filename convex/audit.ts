import { v } from "convex/values"
import { mutation, query } from "./_generated/server"
import { auditVerdictValidator } from "./schema"

export const recordAudit = mutation({
  args: {
    rank: v.number(),
    verdict: auditVerdictValidator,
    hits: v.array(v.string()),
    misses: v.array(v.string()),
    notes: v.optional(v.union(v.string(), v.null())),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const app = await ctx.db
      .query("apps")
      .withIndex("by_rank", (q) => q.eq("rank", args.rank))
      .unique()
    if (!app) throw new Error(`App with rank ${args.rank} not found`)

    await ctx.db.patch(app._id, {
      audit: {
        auditedAt: Date.now(),
        verdict: args.verdict,
        hits: args.hits,
        misses: args.misses,
        notes: args.notes ?? null,
      },
    })
    return null
  },
})

export const clearAudit = mutation({
  args: { rank: v.number() },
  returns: v.null(),
  handler: async (ctx, args) => {
    const app = await ctx.db
      .query("apps")
      .withIndex("by_rank", (q) => q.eq("rank", args.rank))
      .unique()
    if (!app) throw new Error(`App with rank ${args.rank} not found`)

    await ctx.db.patch(app._id, { audit: undefined })
    return null
  },
})

const sampleEntry = v.object({
  rank: v.number(),
  name: v.string(),
  category: v.string(),
  reasons: v.array(v.string()),
  confidence: v.union(v.string(), v.null()),
  catalogComparison: v.union(v.string(), v.null()),
  correctionsApplied: v.number(),
})

// Deterministic ~10-app audit sample: low/medium confidence, catalog
// mismatches, apps where pass 2 corrected pass 1, then evenly spaced
// high-confidence catalog matches to round out the set.
export const suggestSample = query({
  args: { size: v.optional(v.number()) },
  returns: v.array(sampleEntry),
  handler: async (ctx, args) => {
    const target = args.size ?? 10
    const apps = await ctx.db.query("apps").withIndex("by_rank").take(200)

    const picked = new Map<
      number,
      { rank: number; name: string; category: string; reasons: string[] }
    >()
    const add = (app: (typeof apps)[number], reason: string) => {
      const existing = picked.get(app.rank)
      if (existing) existing.reasons.push(reason)
      else
        picked.set(app.rank, {
          rank: app.rank,
          name: app.name,
          category: app.category,
          reasons: [reason],
        })
    }

    const researched = apps.filter((a) => a.researchStatus === "completed")

    for (const app of researched) {
      if (app.verification?.confidence === "low") add(app, "low confidence")
    }
    for (const app of researched) {
      if (app.verification?.confidence === "medium")
        add(app, "medium confidence")
    }
    for (const app of researched) {
      if (app.verification?.catalogComparison === "mismatch")
        add(app, "catalog mismatch")
    }
    for (const app of researched) {
      if ((app.verification?.correctionsApplied ?? 0) > 0)
        add(app, "pass-2 corrected pass-1")
    }
    for (const app of researched) {
      if (!app.composioInCatalog) add(app, "absent from catalog")
    }

    if (picked.size < target) {
      const fillers = researched.filter(
        (a) =>
          !picked.has(a.rank) &&
          a.verification?.confidence === "high" &&
          a.verification.catalogComparison === "match"
      )
      const step = Math.max(1, Math.floor(fillers.length / target))
      for (let i = 0; i < fillers.length && picked.size < target; i += step) {
        add(fillers[i], "representative high-confidence match")
      }
    }

    // Select with a per-category cap so the sample spans the research set;
    // relax the cap on a second pass if the target is not met.
    const ordered = [...picked.values()].sort(
      (a, b) => b.reasons.length - a.reasons.length || a.rank - b.rank
    )
    const perCategory = new Map<string, number>()
    const chosen: typeof ordered = []
    for (const cap of [2, Number.POSITIVE_INFINITY]) {
      for (const entry of ordered) {
        if (chosen.length >= target) break
        if (chosen.includes(entry)) continue
        const seen = perCategory.get(entry.category) ?? 0
        if (seen >= cap) continue
        perCategory.set(entry.category, seen + 1)
        chosen.push(entry)
      }
      if (chosen.length >= target) break
    }

    return chosen
      .sort((a, b) => a.rank - b.rank)
      .map((p) => {
        const app = apps.find((a) => a.rank === p.rank)!
        return {
          ...p,
          confidence: app.verification?.confidence ?? null,
          catalogComparison: app.verification?.catalogComparison ?? null,
          correctionsApplied: app.verification?.correctionsApplied ?? 0,
        }
      })
  },
})