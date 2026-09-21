"use node"

import { internalAction } from "./_generated/server"
import { v } from "convex/values"
import { generateStructuredWithMeta, TruncatedOutputError, type StructuredMeta } from "./llm"
import {
  accessModelValidator,
  apiBreadthValidator,
  apiStyleValidator,
  authMethodValidator,
  buildabilityValidator,
  fieldCheckValidator,
  verificationConfidenceValidator,
} from "./schema"
import { verificationLlmSchema, type VerificationExtraction } from "./lib/researchSchemas"
import { TraceCollector, traceValidator } from "./lib/trace"

function isTransientLlmError(error: unknown): boolean {
  if (error instanceof TruncatedOutputError) {
    return true
  }
  const message = error instanceof Error ? error.message : String(error)
  return /rate limit|429|too many requests|quota|high demand|try again later|resource exhausted|overloaded|unavailable|503|529|truncated|finish_reason: length/i.test(
    message
  )
}

async function withAdaptiveLlm<T>(
  trace: TraceCollector,
  phaseName: string,
  fn: (opts: { attempt: number; maxTokens: number; promptSuffix?: string }) => Promise<{ data: T; meta: StructuredMeta }>
): Promise<T> {
  const maxAttempts = 3
  let currentMaxTokens = 8192
  let promptSuffix: string | undefined = undefined
  let lastError: unknown

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const stepLabel = attempt === 1 ? phaseName : `${phaseName} (retry ${attempt - 1})`
    try {
      const { data, meta } = await fn({ attempt, maxTokens: currentMaxTokens, promptSuffix })
      trace.step(
        stepLabel,
        `finish_reason=${meta.finishReason}, tokens=${meta.completionTokens ?? "?"}/${currentMaxTokens}, duration=${meta.durationMs}ms${meta.salvaged ? " (JSON salvaged)" : ""}`,
        meta.salvaged ? "warn" : "ok",
        meta.durationMs
      )
      return data
    } catch (error) {
      lastError = error
      const isTruncation = error instanceof TruncatedOutputError
      const errMsg = error instanceof Error ? error.message : String(error)

      trace.step(
        stepLabel,
        `Failed: ${errMsg}`,
        "error"
      )

      if (!isTransientLlmError(error) || attempt === maxAttempts) {
        throw error
      }

      if (isTruncation) {
        currentMaxTokens = Math.min(16384, currentMaxTokens * 2)
        promptSuffix = "\n\nCRITICAL: Keep all note strings under 150 characters each. Return compact JSON only."
      }

      const waitMs = isTruncation ? 2000 : Math.min(45_000, 8_000 * 2 ** (attempt - 1))
      await new Promise((resolve) => setTimeout(resolve, waitMs))
    }
  }

  throw lastError
}

export const verifyResearchFindings = internalAction({
  args: {
    name: v.string(),
    website: v.string(),
    category: v.string(),
    docsUrl: v.union(v.string(), v.null()),
    primaryDocsContent: v.string(),
    firstPassFindings: v.object({
      oneLiner: v.string(),
      authMethods: v.array(authMethodValidator),
      access: accessModelValidator,
      apiStyles: v.array(apiStyleValidator),
      apiBreadth: apiBreadthValidator,
      hasOfficialMcp: v.boolean(),
      buildability: buildabilityValidator,
      blocker: v.union(v.string(), v.null()),
    }),
  },
  returns: v.object({
    confidence: verificationConfidenceValidator,
    summary: v.string(),
    fieldChecks: v.array(fieldCheckValidator),
    revisedAuthMethods: v.optional(v.array(authMethodValidator)),
    revisedAccess: v.optional(accessModelValidator),
    revisedBuildability: v.optional(buildabilityValidator),
    trace: traceValidator,
  }),
  handler: async (_ctx, args) => {
    const trace = new TraceCollector()

    const boundedDocs = args.primaryDocsContent.slice(0, 10000)
    trace.step(
      "1. Context ingestion",
      `Primary docs: ${args.docsUrl ?? "search snippet"} (${boundedDocs.length} chars)`,
      "ok"
    )

    const basePrompt = `You are a Senior Product Ops Quality Auditor verifying an AI agent's initial research findings on "${args.name}".

Initial Research Findings:
- One-liner: "${args.firstPassFindings.oneLiner}"
- Auth methods: ${JSON.stringify(args.firstPassFindings.authMethods)}
- Access model: ${args.firstPassFindings.access}
- API styles: ${JSON.stringify(args.firstPassFindings.apiStyles)}
- API breadth: ${args.firstPassFindings.apiBreadth}
- Has official MCP: ${args.firstPassFindings.hasOfficialMcp}
- Buildability: ${args.firstPassFindings.buildability}
- Blocker: ${args.firstPassFindings.blocker ?? "none"}

Primary Documentation Text (${args.docsUrl ?? "search snippet"}):
---
${boundedDocs}
---

Cross-check each field against the primary documentation.
- If primary documentation confirms the finding, mark verified=true.
- If primary documentation shows the agent hallucinated or got auth/access/buildability wrong, mark verified=false, provide the corrected value, and supply the revised enum in revisedAuthMethods/revisedAccess/revisedBuildability.
- Keep each note brief (1-2 sentences).
- Provide a realistic confidence (high / medium / low). If documentation is sparse, set medium or low.`

    const result = await withAdaptiveLlm<VerificationExtraction>(
      trace,
      "2. Kimi-K3 Verification Cross-Check",
      async ({ maxTokens, promptSuffix }) => {
        return await generateStructuredWithMeta({
          schema: verificationLlmSchema,
          prompt: promptSuffix ? `${basePrompt}${promptSuffix}` : basePrompt,
          system:
            "You are a rigorous verification auditor who catches hallucinations, confirms evidence, and rates factual confidence. Return only valid JSON conforming strictly to the schema.",
          temperature: 0.1,
          maxTokens,
        })
      }
    )

    const confirmedCount = result.fieldChecks.filter((f) => f.verified).length
    trace.step(
      "3. Audit complete",
      `Confidence: ${result.confidence}, Confirmed: ${confirmedCount}/${result.fieldChecks.length} fields`,
      "ok"
    )

    return {
      confidence: result.confidence,
      summary: result.summary,
      fieldChecks: result.fieldChecks.map((f) => ({
        field: f.field,
        original: f.original,
        verified: f.verified,
        corrected: f.corrected ?? null,
        note: f.note,
      })),
      revisedAuthMethods: result.revisedAuthMethods,
      revisedAccess: result.revisedAccess,
      revisedBuildability: result.revisedBuildability,
      trace: trace.getTrace(),
    }
  },
})
