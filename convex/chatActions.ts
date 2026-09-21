"use node"

import { v } from "convex/values"

import { internal } from "./_generated/api"
import { internalAction } from "./_generated/server"
import { streamMarkdown } from "./llm"

export const stream = internalAction({
  args: {
    messageId: v.id("chatMessages"),
    prompt: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    let text = ""
    let lastWriteAt = 0
    let lastWrittenText = ""

    try {
      const textStream = await streamMarkdown({ prompt: args.prompt })

      for await (const delta of textStream) {
        text += delta
        const now = Date.now()
        if (now - lastWriteAt >= 100) {
          lastWriteAt = now
          await ctx.runMutation(internal.chat.updateStream, {
            messageId: args.messageId,
            text,
            status: "streaming",
          })
          lastWrittenText = text
        }
      }

      if (text !== lastWrittenText) {
        await ctx.runMutation(internal.chat.updateStream, {
          messageId: args.messageId,
          text,
          status: "streaming",
        })
      }

      await ctx.runMutation(internal.chat.updateStream, {
        messageId: args.messageId,
        text,
        status: "done",
      })
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to generate a response"
      await ctx.runMutation(internal.chat.updateStream, {
        messageId: args.messageId,
        text,
        status: "error",
        error: message,
      })
    }

    return null
  },
})
