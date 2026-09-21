"use node"

import { v } from "convex/values"
import { z } from "zod"

import { action } from "./_generated/server"
import { generateStructured } from "./llm"

export const structuredAnalysisSchema = z.object({
  title: z.string().describe("A concise descriptive title for the analysis"),
  summary: z.string().describe("A 1-2 sentence executive summary of the topic"),
  category: z
    .enum(["engineering", "product", "security", "operations", "general"])
    .describe("Primary domain classification"),
  priority: z
    .enum(["low", "medium", "high", "critical"])
    .describe("Assessed urgency or priority level"),
  sentiment: z
    .enum(["positive", "neutral", "negative", "mixed"])
    .describe("Overall tone or risk outlook"),
  tags: z
    .array(z.string())
    .describe("3-6 descriptive keywords or tags"),
  actionItems: z
    .array(
      z.object({
        task: z.string().describe("Specific next step or recommendation"),
        ownerRole: z.string().describe("Suggested role to take ownership"),
      })
    )
    .describe("Concrete follow-up action items"),
})

export type StructuredAnalysis = z.infer<typeof structuredAnalysisSchema>

export const structuredAnalysisReturns = v.object({
  title: v.string(),
  summary: v.string(),
  category: v.union(
    v.literal("engineering"),
    v.literal("product"),
    v.literal("security"),
    v.literal("operations"),
    v.literal("general")
  ),
  priority: v.union(
    v.literal("low"),
    v.literal("medium"),
    v.literal("high"),
    v.literal("critical")
  ),
  sentiment: v.union(
    v.literal("positive"),
    v.literal("neutral"),
    v.literal("negative"),
    v.literal("mixed")
  ),
  tags: v.array(v.string()),
  actionItems: v.array(
    v.object({
      task: v.string(),
      ownerRole: v.string(),
    })
  ),
})

export const analyzeText = action({
  args: {
    prompt: v.string(),
  },
  returns: structuredAnalysisReturns,
  handler: async (_ctx, args): Promise<StructuredAnalysis> => {
    const trimmed = args.prompt.trim()
    if (!trimmed) {
      throw new Error("Prompt cannot be empty")
    }
    if (trimmed.length > 8000) {
      throw new Error("Prompt is too long (maximum 8000 characters)")
    }

    const output = await generateStructured({
      schema: structuredAnalysisSchema,
      prompt: `Analyze the following input and return the structured output according to the schema:\n\n${trimmed}`,
      system:
        "You are an analytical assistant that evaluates prompts and strictly extracts well-formed structured intelligence matching the requested schema.",
      temperature: 0.1,
    })

    return output
  },
})
