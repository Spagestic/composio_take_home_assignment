"use node"

import { v } from "convex/values"
import { z } from "zod"

import { action } from "./_generated/server"
import { generateStructured } from "./llm"

export const structuredTaskSchema = z.object({
  title: z.string().describe("Concise task title"),
  summary: z.string().describe("Short 1-sentence explanation of the task"),
  priority: z.enum(["low", "medium", "high"]).describe("Task priority level"),
  tags: z.array(z.string()).describe("2-4 relevant keyword tags"),
  isCompleted: z.boolean().describe("Whether this task appears already finished"),
})

export type StructuredTask = z.infer<typeof structuredTaskSchema>

export const structuredTaskReturns = v.object({
  title: v.string(),
  summary: v.string(),
  priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high")),
  tags: v.array(v.string()),
  isCompleted: v.boolean(),
})

export const analyzeTask = action({
  args: {
    prompt: v.string(),
  },
  returns: structuredTaskReturns,
  handler: async (_ctx, args): Promise<StructuredTask> => {
    const trimmed = args.prompt.trim()
    if (!trimmed) {
      throw new Error("Prompt cannot be empty")
    }
    if (trimmed.length > 4000) {
      throw new Error("Prompt is too long (maximum 4000 characters)")
    }

    const output = await generateStructured({
      schema: structuredTaskSchema,
      prompt: `Extract a structured task from this text:\n\n${trimmed}`,
      system:
        "You are a helpful assistant that extracts a structured task from plain English text matching the given schema.",
      temperature: 0.1,
    })

    return output
  },
})
