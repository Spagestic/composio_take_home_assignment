import { google } from "@ai-sdk/google"

import { generateText, Output } from "ai"

import type { z } from "zod"

// 3.8-flash was returning "high demand"; 2.5-flash is the stable Flash model for this pipeline.
export const MODEL = google("gemini-2.5-flash")

export async function generateStructured<T>(args: {
  schema: z.ZodType<T>
  prompt: string
  system?: string
  temperature?: number
}): Promise<T> {
  const result = await generateText({
    model: MODEL,
    output: Output.object({
      schema: args.schema,
    }),
    prompt: args.prompt,
    maxRetries: 0,
    ...(args.system ? { system: args.system } : {}),
    ...(args.temperature !== undefined
      ? { temperature: args.temperature }
      : {}),
  })

  return result.output as T
}

export async function generateMarkdown(args: {
  prompt: string
  system?: string
  temperature?: number
}): Promise<string> {
  const result = await generateText({
    model: MODEL,
    prompt: args.prompt,
    maxRetries: 0,
    ...(args.system ? { system: args.system } : {}),
    ...(args.temperature !== undefined
      ? { temperature: args.temperature }
      : {}),
  })

  return result.text
}

export function today(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
