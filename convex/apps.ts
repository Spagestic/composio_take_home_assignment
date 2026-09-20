import { mutation, query } from "./_generated/server"
import { v } from "convex/values"
import {
  accessModelValidator,
  apiBreadthValidator,
  apiStyleValidator,
  appDocValidator,
  authMethodValidator,
  buildabilityValidator,
} from "./schema"

export const list = query({
  args: {},
  returns: v.array(appDocValidator),
  handler: async (ctx) => {
    return await ctx.db.query("apps").withIndex("by_rank").collect()
  },
})

export const getByRank = query({
  args: { rank: v.number() },
  returns: v.union(appDocValidator, v.null()),
  handler: async (ctx, args) => {
    return await ctx.db
      .query("apps")
      .withIndex("by_rank", (q) => q.eq("rank", args.rank))
      .unique()
  },
})

export const updateResearch = mutation({
  args: {
    rank: v.number(),
    oneLiner: v.optional(v.union(v.string(), v.null())),
    authMethods: v.optional(v.union(v.array(authMethodValidator), v.null())),
    access: v.optional(v.union(accessModelValidator, v.null())),
    apiStyles: v.optional(v.union(v.array(apiStyleValidator), v.null())),
    apiBreadth: v.optional(v.union(apiBreadthValidator, v.null())),
    hasOfficialMcp: v.optional(v.union(v.boolean(), v.null())),
    buildability: v.optional(v.union(buildabilityValidator, v.null())),
    blocker: v.optional(v.union(v.string(), v.null())),
    docsUrl: v.optional(v.union(v.string(), v.null())),
    evidenceNotes: v.optional(v.union(v.string(), v.null())),
  },
  returns: v.id("apps"),
  handler: async (ctx, args) => {
    const app = await ctx.db
      .query("apps")
      .withIndex("by_rank", (q) => q.eq("rank", args.rank))
      .unique()

    if (!app) {
      throw new Error(`App with rank ${args.rank} not found`)
    }

    const { rank: _rank, ...patchData } = args
    await ctx.db.patch(app._id, patchData)
    return app._id
  },
})
