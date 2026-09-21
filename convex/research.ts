import { WorkflowManager } from "@convex-dev/workflow";
import { v } from "convex/values";
import { components, internal } from "./_generated/api";
import { mutation } from "./_generated/server";
import { compareWithCatalogBaseline } from "./lib/catalogCompare";

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

      // 3. Extract structured research findings
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

      const targetDocsUrl = findings.docsUrl ?? searchResult.suggestedDocsUrl;

      // 4. Fetch primary (API) docs and an auth page when they differ
      const fetchedDocs = targetDocsUrl
        ? await step.runAction(
            internal.researchSteps.fetchDocsContent,
            { url: targetDocsUrl },
            { retry: { maxAttempts: 2, initialBackoffMs: 2000, base: 2 } }
          )
        : { url: "", text: "", success: false };

      const authUrl = searchResult.suggestedAuthUrl;
      const fetchedAuth =
        authUrl && authUrl !== targetDocsUrl
          ? await step.runAction(
              internal.researchSteps.fetchDocsContent,
              { url: authUrl },
              { retry: { maxAttempts: 1, initialBackoffMs: 1000, base: 2 } }
            )
          : { url: "", text: "", success: false };

      const combinedDocs = [
        fetchedDocs.success && fetchedDocs.text
          ? `PRIMARY DOCS (${targetDocsUrl}):\n${fetchedDocs.text}`
          : "",
        fetchedAuth.success && fetchedAuth.text
          ? `AUTH DOCS (${authUrl}):\n${fetchedAuth.text}`
          : "",
        `FIRST-PASS SEARCH CONTEXT:\n${searchResult.contextText.slice(0, 8000)}`,
      ]
        .filter(Boolean)
        .join("\n\n---\n\n");

      // 5. LLM verification pass
      const verifyResult = await step.runAction(
        internal.verify.verifyResearchFindings,
        {
          name: app.name,
          website: app.website,
          category: app.category,
          docsUrl: targetDocsUrl,
          primaryDocsContent: combinedDocs,
          firstPassFindings: {
            oneLiner: findings.oneLiner,
            authMethods: findings.authMethods,
            access: findings.access,
            apiStyles: findings.apiStyles,
            apiBreadth: findings.apiBreadth,
            hasOfficialMcp: findings.hasOfficialMcp,
            buildability: findings.buildability,
            blocker: findings.blocker,
          },
        },
        { retry: { maxAttempts: 3, initialBackoffMs: 5000, base: 2 } }
      );

      // 6. Deterministic catalog cross-check
      const catalogBaseline = await step.runQuery(
        internal.catalog.getByRankInternal,
        { rank: args.rank }
      );

      const { catalogComparison, catalogNotes } = compareWithCatalogBaseline({
        baseline: catalogBaseline,
        findings,
        revisions: verifyResult,
      });

      // Reconcile findings with revisions from verification
      const effectiveAuthMethods = verifyResult.revisedAuthMethods ?? findings.authMethods;
      const effectiveAccess = verifyResult.revisedAccess ?? findings.access;
      // Do not demote buildability to caveats solely for auth-product migrations
      // (e.g. Salesforce Connected Apps → External Client Apps) when a public API remains.
      let effectiveBuildability = verifyResult.revisedBuildability ?? findings.buildability;
      const buildabilityNote = (verifyResult.fieldChecks ?? [])
        .filter((c) => c.field.toLowerCase().includes("buildability"))
        .map((c) => `${c.note} ${c.corrected ?? ""}`)
        .join(" ");
      if (
        findings.buildability === "ready" &&
        effectiveBuildability === "caveats" &&
        /connected app|external client app|spring ['’]?26|oauth/i.test(buildabilityNote) &&
        !/no api|partner.?gate|contact sales|closed/i.test(buildabilityNote)
      ) {
        effectiveBuildability = "ready";
      }

      const correctionsCount =
        (verifyResult.revisedAuthMethods ? 1 : 0) +
        (verifyResult.revisedAccess ? 1 : 0) +
        (verifyResult.revisedBuildability && effectiveBuildability !== findings.buildability ? 1 : 0);

      // 7. Update the app document in the database
      await step.runMutation(internal.apps.updateResearchInternal, {
        rank: args.rank,
        oneLiner: findings.oneLiner,
        authMethods: effectiveAuthMethods,
        access: effectiveAccess,
        apiStyles: findings.apiStyles,
        apiBreadth: findings.apiBreadth,
        hasOfficialMcp: findings.hasOfficialMcp,
        buildability: effectiveBuildability,
        blocker:
          findings.blocker ??
          (effectiveBuildability === "ready" && /connected app|external client app/i.test(buildabilityNote)
            ? "Auth setup note: prefer External Client Apps; new Connected Apps are being retired."
            : null),
        docsUrl: targetDocsUrl,
        evidenceNotes: findings.evidenceNotes,
        sources: searchResult.sources,
        citations: findings.citations ?? null,
        verification: {
          verifiedAt: Date.now(),
          confidence: verifyResult.confidence,
          summary: verifyResult.summary,
          fieldChecks: verifyResult.fieldChecks,
          catalogComparison,
          catalogNotes,
          correctionsApplied: correctionsCount,
        },
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
        buildability: effectiveBuildability,
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
      workflowIds: [workflowId, ...existingIds.filter((id) => id !== workflowId)].slice(0, 5),
    });

    return workflowId;
  },
});
