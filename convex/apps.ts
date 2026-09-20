import {
  internalMutation,
  internalQuery,
  mutation,
  query,
} from "./_generated/server"
import { components } from "./_generated/api"
import { workflow } from "./research"
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

export const getByRankInternal = internalQuery({
  args: { rank: v.number() },
  returns: v.union(appDocValidator, v.null()),
  handler: async (ctx, args) => {
    return await ctx.db
      .query("apps")
      .withIndex("by_rank", (q) => q.eq("rank", args.rank))
      .unique()
  },
})

export const setResearchStatus = internalMutation({
  args: {
    rank: v.number(),
    status: v.union(
      v.literal("not_started"),
      v.literal("queued"),
      v.literal("running"),
      v.literal("completed"),
      v.literal("failed")
    ),
    startedAt: v.optional(v.union(v.number(), v.null())),
    completedAt: v.optional(v.union(v.number(), v.null())),
    error: v.optional(v.union(v.string(), v.null())),
    workflowId: v.optional(v.union(v.string(), v.null())),
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

    const patch: Record<string, unknown> = {
      researchStatus: args.status,
    }
    if (args.startedAt !== undefined) {
      patch.researchStartedAt = args.startedAt
    }
    if (args.completedAt !== undefined) {
      patch.researchCompletedAt = args.completedAt
    }
    if (args.error !== undefined) {
      patch.researchError = args.error
    }
    if (args.workflowId !== undefined) {
      patch.workflowId = args.workflowId
      if (args.workflowId) {
        const existingIds = app.workflowIds ?? (app.workflowId ? [app.workflowId] : [])
        if (!existingIds.includes(args.workflowId)) {
          patch.workflowIds = [args.workflowId, ...existingIds]
        }
      }
    }

    await ctx.db.patch(app._id, patch)
    return app._id
  },
})

export const updateResearchInternal = internalMutation({
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

export const getWorkflowSteps = query({
  args: {
    workflowId: v.optional(v.union(v.string(), v.null())),
  },
  returns: v.array(v.any()),
  handler: async (ctx, args) => {
    if (!args.workflowId) return [];

    try {
      const result: any = await workflow.listSteps(ctx, args.workflowId as any);
      if (Array.isArray(result)) return result;
      if (result && Array.isArray(result.page)) return result.page;
      return [];
    } catch (err) {
      console.error("Failed to list steps:", err);
      return [];
    }
  },
})

export const getWorkflowRuns = query({
  args: {
    workflowIds: v.optional(v.array(v.string())),
  },
  returns: v.array(
    v.object({
      workflowId: v.string(),
      status: v.string(),
      startedAt: v.optional(v.union(v.number(), v.null())),
      completedAt: v.optional(v.union(v.number(), v.null())),
      error: v.optional(v.union(v.string(), v.null())),
    })
  ),
  handler: async (ctx, args) => {
    if (!args.workflowIds || args.workflowIds.length === 0) return [];

    const runs = await Promise.all(
      args.workflowIds.map(async (workflowId) => {
        try {
          const runStatus: any = await workflow.status(ctx, workflowId as any);
          if (!runStatus) {
            return {
              workflowId,
              status: "unknown",
            };
          }

          let state = "unknown";
          let error = null;

          if (runStatus.state) {
            if (typeof runStatus.state === "string") {
              state = runStatus.state;
            } else if (typeof runStatus.state === "object") {
              state = runStatus.state.kind ?? "unknown";
              if (runStatus.state.error) {
                error = String(runStatus.state.error);
              }
            }
          } else if (runStatus.status) {
            state = runStatus.status;
          }

          if (runStatus.error) {
            error = String(runStatus.error);
          }

          // If there is an error or it failed / canceled, normalize state
          if (error && state !== "completed") {
            state = "failed";
          }

          return {
            workflowId,
            status: state,
            startedAt: runStatus.startedAt ?? runStatus.creationTime ?? null,
            completedAt: runStatus.completedAt ?? null,
            error,
          };
        } catch (err) {
          console.error(`Failed to get status for workflow ${workflowId}:`, err);
          return {
            workflowId,
            status: "unknown",
          };
        }
      })
    );

    return runs;
  },
})
