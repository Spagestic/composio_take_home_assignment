import { WorkflowManager } from "@convex-dev/workflow";
import { v } from "convex/values";
import { components, internal } from "./_generated/api";
import { mutation } from "./_generated/server";

export const workflow = new WorkflowManager(components.workflow);

export const researchApp = workflow
  .define({
    args: { rank: v.number() },
    returns: v.object({
      ok: v.boolean(),
      rank: v.number(),
      name: v.string(),
      buildability: v.string(),
      error: v.optional(v.string()),
    }),
  })
  .handler(async (step, args): Promise<{
    ok: boolean;
    rank: number;
    name: string;
    buildability: string;
    error?: string;
  }> => {
    // 1. Load app record
    const app = await step.runQuery(internal.apps.getByRankInternal, {
      rank: args.rank,
    });

    if (!app) {
      throw new Error(`App with rank ${args.rank} not found`);
    }

    // Mark status as running
    await step.runMutation(internal.apps.setResearchStatus, {
      rank: args.rank,
      status: "running",
      startedAt: Date.now(),
      error: null,
    });

    try {
      // 2. Search docs via Exa
      const searchResult = await step.runAction(
        internal.researchSteps.searchAppDocs,
        {
          name: app.name,
          website: app.website,
          category: app.category,
        },
        { retry: { maxAttempts: 3, initialBackoffMs: 1000, base: 2 } }
      );

      // 3. Extract structured research findings with Kimi K3 via Modal
      const findings = await step.runAction(
        internal.extract.extractResearchFindings,
        {
          name: app.name,
          website: app.website,
          category: app.category,
          contextText: searchResult.contextText,
        },
        { retry: { maxAttempts: 4, initialBackoffMs: 20000, base: 2 } }
      );

      // 4. Update the app document in the database
      await step.runMutation(internal.apps.updateResearchInternal, {
        rank: args.rank,
        oneLiner: findings.oneLiner,
        authMethods: findings.authMethods,
        access: findings.access,
        apiStyles: findings.apiStyles,
        apiBreadth: findings.apiBreadth,
        hasOfficialMcp: findings.hasOfficialMcp,
        buildability: findings.buildability,
        blocker: findings.blocker,
        docsUrl: findings.docsUrl ?? searchResult.suggestedDocsUrl,
        evidenceNotes: findings.evidenceNotes,
      });

      // 5. Mark as completed
      await step.runMutation(internal.apps.setResearchStatus, {
        rank: args.rank,
        status: "completed",
        completedAt: Date.now(),
        error: null,
      });

      return {
        ok: true,
        rank: args.rank,
        name: app.name,
        buildability: findings.buildability,
      };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);

      await step.runMutation(internal.apps.setResearchStatus, {
        rank: args.rank,
        status: "failed",
        completedAt: Date.now(),
        error: errorMessage,
      });

      return {
        ok: false,
        rank: args.rank,
        name: app.name,
        buildability: "unknown",
        error: errorMessage,
      };
    }
  });

export const startResearch = mutation({
  args: { rank: v.number() },
  returns: v.string(),
  handler: async (ctx, args): Promise<string> => {
    // Optimistically mark as queued in database
    const existing = await ctx.db
      .query("apps")
      .withIndex("by_rank", (q) => q.eq("rank", args.rank))
      .unique();

    if (!existing) {
      throw new Error(`App with rank ${args.rank} not found`);
    }

    if (existing.researchStatus === "queued" || existing.researchStatus === "running") {
      throw new Error(
        `${existing.name} is already being researched. Wait for it to finish before starting another run.`
      );
    }

    await ctx.db.patch(existing._id, {
      researchStatus: "queued",
      researchError: null,
    });

    const workflowId: string = await workflow.start(
      ctx,
      internal.research.researchApp,
      { rank: args.rank }
    );

    const existingIds =
      existing.workflowIds ?? (existing.workflowId ? [existing.workflowId] : []);
    await ctx.db.patch(existing._id, {
      workflowId,
      workflowIds: [workflowId, ...existingIds.filter((id) => id !== workflowId)],
    });

    return workflowId;
  },
});
