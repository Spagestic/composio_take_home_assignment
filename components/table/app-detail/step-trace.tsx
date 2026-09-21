import * as React from "react"
import { CheckCircle2, AlertTriangle, XCircle, Clock } from "lucide-react"

export interface TraceItem {
  label: string
  status: "ok" | "warn" | "error"
  detail?: string
  durationMs?: number
}

interface StepTraceViewProps {
  trace: TraceItem[]
}

export function StepTraceView({ trace }: StepTraceViewProps) {
  if (!trace || trace.length === 0) return null

  return (
    <div className="flex flex-col gap-1 rounded border border-border/50 bg-background/50 p-2 font-sans">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground font-mono">
        Substep Execution Trace ({trace.length})
      </span>

      <div className="flex flex-col gap-1 pt-0.5">
        {trace.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between gap-2 text-[11px] border-b border-border/30 pb-1 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start gap-1.5 min-w-0">
              {item.status === "ok" ? (
                <CheckCircle2 className="size-3 text-emerald-500 shrink-0 mt-0.5" />
              ) : item.status === "warn" ? (
                <AlertTriangle className="size-3 text-amber-500 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="size-3 text-destructive shrink-0 mt-0.5" />
              )}
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-foreground">{item.label}</span>
                {item.detail && (
                  <span className="text-[10px] text-muted-foreground font-mono break-words leading-snug">
                    {item.detail}
                  </span>
                )}
              </div>
            </div>

            {item.durationMs !== undefined && (
              <span className="text-[10px] font-mono text-muted-foreground shrink-0 flex items-center gap-0.5">
                <Clock className="size-2.5" />
                {item.durationMs < 1000 ? `${item.durationMs}ms` : `${(item.durationMs / 1000).toFixed(1)}s`}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
