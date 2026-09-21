import { v } from "convex/values"

export interface TraceEntry {
  label: string
  status: "ok" | "warn" | "error"
  detail?: string
  durationMs?: number
}

export const traceValidator = v.array(
  v.object({
    label: v.string(),
    status: v.union(v.literal("ok"), v.literal("warn"), v.literal("error")),
    detail: v.optional(v.string()),
    durationMs: v.optional(v.number()),
  })
)

export class TraceCollector {
  private entries: TraceEntry[] = []

  step(label: string, detail?: string, status: "ok" | "warn" | "error" = "ok", durationMs?: number) {
    this.entries.push({
      label,
      status,
      detail,
      durationMs,
    })
  }

  async track<T>(label: string, fn: () => Promise<{ result: T; detail?: string; warn?: boolean }>): Promise<T> {
    const start = Date.now()
    try {
      const { result, detail, warn } = await fn()
      const durationMs = Date.now() - start
      this.entries.push({
        label,
        status: warn ? "warn" : "ok",
        detail,
        durationMs,
      })
      return result
    } catch (err) {
      const durationMs = Date.now() - start
      const message = err instanceof Error ? err.message : String(err)
      this.entries.push({
        label,
        status: "error",
        detail: message,
        durationMs,
      })
      throw err
    }
  }

  getTrace(): TraceEntry[] {
    return [...this.entries]
  }
}
