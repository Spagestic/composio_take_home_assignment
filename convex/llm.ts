import OpenAI from "openai"
import { z } from "zod"

export const MODEL = "moonshotai/Kimi-K3"

export class TruncatedOutputError extends Error {
  readonly completionTokens?: number
  readonly promptTokens?: number
  readonly finishReason: string

  constructor(args: {
    message: string
    finishReason: string
    completionTokens?: number
    promptTokens?: number
  }) {
    super(args.message)
    this.name = "TruncatedOutputError"
    this.finishReason = args.finishReason
    this.completionTokens = args.completionTokens
    this.promptTokens = args.promptTokens
  }
}

export interface StructuredMeta {
  finishReason: string
  promptTokens?: number
  completionTokens?: number
  reasoningTokens?: number
  durationMs: number
  salvaged: boolean
  rawLength: number
}

function cleanJsonContent(raw: string): { cleaned: string; salvaged: boolean } {
  let content = raw.trim()
  let salvaged = false

  // Strip markdown code fences if wrapped in ```json ... ``` or ``` ... ```
  if (content.startsWith("```")) {
    const lines = content.split("\n")
    if (lines.length >= 2) {
      // Remove opening ```... and trailing ```
      const startIdx = 1
      let endIdx = lines.length - 1
      if (lines[endIdx]?.trim().endsWith("```")) {
        // ok
      } else {
        // Maybe fence ends somewhere else
        while (endIdx > 0 && !lines[endIdx]?.trim().startsWith("```")) {
          endIdx--
        }
      }
      content = lines.slice(startIdx, endIdx).join("\n").trim()
      salvaged = true
    }
  }

  // If still not starting with '{' or '[', attempt to locate the first balanced block
  const firstBrace = content.indexOf("{")
  const lastBrace = content.lastIndexOf("}")
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    if (firstBrace > 0 || lastBrace < content.length - 1) {
      content = content.slice(firstBrace, lastBrace + 1)
      salvaged = true
    }
  }

  return { cleaned: content, salvaged }
}

type KimiCompletionParams = OpenAI.ChatCompletionCreateParamsNonStreaming & {
  reasoning: { enabled: true }
}

type KimiStreamingParams = OpenAI.ChatCompletionCreateParamsStreaming & {
  reasoning: { enabled: true }
}

function getClient(): OpenAI {
  const tokenId = process.env.MODAL_PROXY_TOKEN_ID
  const tokenSecret = process.env.MODAL_PROXY_TOKEN_SECRET

  if (!tokenId || !tokenSecret) {
    throw new Error(
      "MODAL_PROXY_TOKEN_ID and MODAL_PROXY_TOKEN_SECRET must be configured",
    )
  }

  return new OpenAI({
    baseURL: "https://spagestic--ep-kimi-k3-server.us-west.modal.direct/v1",
    apiKey: `${tokenId}.${tokenSecret}`,
  })
}

function messages(args: {
  prompt: string
  system?: string
}): OpenAI.ChatCompletionMessageParam[] {
  return [
    ...(args.system
      ? [{ role: "system" as const, content: args.system }]
      : []),
    { role: "user" as const, content: args.prompt },
  ]
}

export async function generateStructuredWithMeta<T>(args: {
  schema: z.ZodType<T>
  prompt: string
  system?: string
  temperature?: number
  maxTokens?: number
}): Promise<{ data: T; meta: StructuredMeta }> {
  const jsonSchema = z.toJSONSchema(args.schema)
  const startTime = Date.now()

  const maxTokens = args.maxTokens ?? 4096

  const result = await getClient().chat.completions.create({
    model: MODEL,
    messages: messages(args),
    temperature: args.temperature ?? 0.1,
    max_tokens: maxTokens,
    top_p: 0.95,
    reasoning: { enabled: true },
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "structured_output",
        strict: true,
        schema: jsonSchema,
      },
    },
  } as KimiCompletionParams)

  const durationMs = Date.now() - startTime
  const choice = result.choices[0]
  const finishReason = choice?.finish_reason ?? "unknown"
  const rawContent = choice?.message?.content

  const usage = result.usage
  const promptTokens = usage?.prompt_tokens
  const completionTokens = usage?.completion_tokens
  // Optional reasoning tokens field from some OpenAI-compatible providers
  const reasoningTokens = (usage as any)?.completion_tokens_details?.reasoning_tokens

  if (finishReason === "length") {
    throw new TruncatedOutputError({
      message: `Model hit token limit (finish_reason: length, tokens: ${completionTokens}/${maxTokens}). Output JSON was truncated.`,
      finishReason,
      completionTokens,
      promptTokens,
    })
  }

  if (!rawContent) {
    throw new Error(
      `Modal returned an empty structured response (finish_reason: ${finishReason})`
    )
  }

  const { cleaned, salvaged } = cleanJsonContent(rawContent)

  let parsed: unknown
  try {
    parsed = JSON.parse(cleaned)
  } catch (parseErr) {
    throw new Error(
      `Modal returned invalid JSON (finish_reason: ${finishReason}, length: ${rawContent.length}): ${parseErr instanceof Error ? parseErr.message : String(parseErr)}`
    )
  }

  const validation = args.schema.safeParse(parsed)
  if (!validation.success) {
    const issues = validation.error.issues
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join("; ")
    throw new Error(`Schema validation failed on model output: ${issues}`)
  }

  return {
    data: validation.data,
    meta: {
      finishReason,
      promptTokens,
      completionTokens,
      reasoningTokens,
      durationMs,
      salvaged,
      rawLength: rawContent.length,
    },
  }
}

export async function generateStructured<T>(args: {
  schema: z.ZodType<T>
  prompt: string
  system?: string
  temperature?: number
  maxTokens?: number
}): Promise<T> {
  const result = await generateStructuredWithMeta(args)
  return result.data
}

export async function generateMarkdown(args: {
  prompt: string
  system?: string
  temperature?: number
}): Promise<string> {
  const result = await getClient().chat.completions.create({
    model: MODEL,
    messages: messages(args),
    temperature: args.temperature ?? 0.3,
    max_tokens: 2048,
    top_p: 0.95,
    reasoning: { enabled: true },
  } as KimiCompletionParams)

  return result.choices[0]?.message.content ?? ""
}

export async function streamMarkdown(args: {
  prompt: string
  system?: string
  temperature?: number
}): Promise<AsyncIterable<string>> {
  const stream = await getClient().chat.completions.create({
    model: MODEL,
    messages: messages(args),
    temperature: args.temperature ?? 0.3,
    max_tokens: 2048,
    top_p: 0.95,
    stream: true,
    reasoning: { enabled: true },
  } as KimiStreamingParams)

  return {
    async *[Symbol.asyncIterator]() {
      for await (const chunk of stream) {
        const delta = chunk.choices[0]?.delta?.content
        if (delta) {
          yield delta
        }
      }
    },
  }
}

export function today(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
