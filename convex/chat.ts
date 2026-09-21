import { v } from "convex/values"

import { internal } from "./_generated/api"
import {
  internalMutation,
  mutation,
  query,
} from "./_generated/server"

const chatStatusValidator = v.union(
  v.literal("pending"),
  v.literal("streaming"),
  v.literal("done"),
  v.literal("error")
)

export const chatMessageValidator = v.object({
  _id: v.id("chatMessages"),
  _creationTime: v.number(),
  sessionId: v.string(),
  role: v.union(v.literal("user"), v.literal("assistant")),
  text: v.string(),
  status: chatStatusValidator,
  error: v.optional(v.string()),
})

export const listBySession = query({
  args: { sessionId: v.string() },
  returns: v.array(chatMessageValidator),
  handler: async (ctx, args) => {
    const page = await ctx.db
      .query("chatMessages")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .order("desc")
      .take(50)
    return page.reverse()
  },
})

export const startTurn = mutation({
  args: {
    sessionId: v.string(),
    prompt: v.string(),
  },
  returns: v.id("chatMessages"),
  handler: async (ctx, args) => {
    const prompt = args.prompt.trim()
    if (!prompt) {
      throw new Error("Prompt cannot be empty")
    }
    if (prompt.length > 8000) {
      throw new Error("Prompt is too long (max 8000 characters)")
    }

    await ctx.db.insert("chatMessages", {
      sessionId: args.sessionId,
      role: "user",
      text: prompt,
      status: "done",
    })

    const assistantId = await ctx.db.insert("chatMessages", {
      sessionId: args.sessionId,
      role: "assistant",
      text: "",
      status: "pending",
    })

    await ctx.scheduler.runAfter(0, internal.chatActions.stream, {
      messageId: assistantId,
      prompt,
    })

    return assistantId
  },
})

export const updateStream = internalMutation({
  args: {
    messageId: v.id("chatMessages"),
    text: v.string(),
    status: chatStatusValidator,
    error: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const message = await ctx.db.get("chatMessages", args.messageId)
    if (!message) {
      throw new Error("Chat message not found")
    }

    await ctx.db.patch("chatMessages", args.messageId, {
      text: args.text,
      status: args.status,
      ...(args.error !== undefined ? { error: args.error } : {}),
    })
    return null
  },
})
