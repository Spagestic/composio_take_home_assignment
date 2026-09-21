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
  citationsValidator,
} from "./schema"
import { researchExtractionSchema, type ResearchExtraction } from "./lib/researchSchemas"
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
  const maxAttempts = 4
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
        // Double the token budget and instruct terser prose
        currentMaxTokens = Math.min(16384, currentMaxTokens * 2)
        promptSuffix = "\n\nCRITICAL: Keep all prose/string fields concise (under 250 characters each). Do not exceed token budget. Output raw JSON object only."
        console.warn(`Extraction output truncated on attempt ${attempt}. Increasing token budget to ${currentMaxTokens}.`)
      }

      const waitMs = isTruncation ? 2000 : Math.min(60_000, 10_000 * 2 ** (attempt - 1))
      await new Promise((resolve) => setTimeout(resolve, waitMs))
    }
  }

  throw lastError
}

export const extractResearchFindings = internalAction({
  args: {
    name: v.string(),
    website: v.string(),
    category: v.string(),
    contextText: v.string(),
  },
  returns: v.object({
    oneLiner: v.string(),
    authMethods: v.array(authMethodValidator),
    access: accessModelValidator,
    apiStyles: v.array(apiStyleValidator),
    apiBreadth: apiBreadthValidator,
    hasOfficialMcp: v.boolean(),
    buildability: buildabilityValidator,
    blocker: v.union(v.string(), v.null()),
    docsUrl: v.union(v.string(), v.null()),
    evidenceNotes: v.string(),
    citations: v.optional(v.union(citationsValidator, v.null())),
    trace: traceValidator,
  }),
  handler: async (_ctx, args) => {
    const trace = new TraceCollector()

    // 1. Prepare context & prompt
    const boundedContext = args.contextText.slice(0, 12000)
    trace.step(
      "1. Prepare prompt context",
      `Truncated context to ${boundedContext.length} chars (~${Math.round(boundedContext.length / 4)} tokens)`,
      "ok"
    )

    const basePrompt = `You are evaluating the app "${args.name}" (${args.website}, category: ${args.category}) as an AI agent toolkit candidate for Composio.

Here is gathered documentation context and search findings:
---
${boundedContext}
---

Analyze this context thoroughly and extract the exact structured evaluation findings matching the schema.
For citations, attribute each claim (auth, access, apiSurface, mcp, buildability) to the specific source URL from the context that best supports it.
Keep evidenceNotes concise (2-4 sentences max).
Only return factual, verified conclusions supported by the documentation context.`

    // 2. Call LLM with adaptive retry
    const findings = await withAdaptiveLlm<ResearchExtraction>(
      trace,
      "2. Kimi-K3 Structured Extraction",
      async ({ maxTokens, promptSuffix }) => {
        return await generateStructuredWithMeta({
          schema: researchExtractionSchema,
          prompt: promptSuffix ? `${basePrompt}${promptSuffix}` : basePrompt,
          system:
            "You are an expert AI product ops and API integration engineer analyzing developer platforms for agent toolkits. Return only valid JSON conforming strictly to the schema.",
          temperature: 0.1,
          maxTokens,
        })
      }
    )

    trace.step(
      "3. Extraction validated",
      `Verdict: ${findings.buildability}, Access: ${findings.access}, Auth: ${findings.authMethods.join(", ")}`,
      "ok"
    )

    return {
      ...findings,
      citations: findings.citations ?? null,
      trace: trace.getTrace(),
    }
  },
})
