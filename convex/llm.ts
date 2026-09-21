import OpenAI from "openai"
import { z } from "zod"

export const MODEL = "moonshotai/Kimi-K3"

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

export async function generateStructured<T>(args: {
  schema: z.ZodType<T>
  prompt: string
  system?: string
  temperature?: number
}): Promise<T> {
  const jsonSchema = z.toJSONSchema(args.schema)
  const result = await getClient().chat.completions.create({
    model: MODEL,
    messages: messages(args),
    temperature: args.temperature ?? 0.1,
    max_tokens: 2048,
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

  const content = result.choices[0]?.message.content
  if (!content) {
    throw new Error("Modal returned an empty structured response")
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(content)
  } catch {
    throw new Error("Modal returned invalid JSON")
  }

  return args.schema.parse(parsed)
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
