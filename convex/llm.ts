import { google } from "@ai-sdk/google"

import { generateText, Output, streamText } from "ai"

import type { z } from "zod"

// Gemini 2.5 Flash is no longer available to new users; 3.6 Flash is the current Flash model.
export const MODEL = google("gemini-3.6-flash")

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

export function streamMarkdown(args: {
  prompt: string
  system?: string
  temperature?: number
}) {
  return streamText({
    model: MODEL,
    prompt: args.prompt,
    maxRetries: 0,
    ...(args.system ? { system: args.system } : {}),
    ...(args.temperature !== undefined
      ? { temperature: args.temperature }
      : {}),
  })
}

export function today(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
