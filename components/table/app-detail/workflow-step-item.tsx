"use client"

import * as React from "react"
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Loader2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

function formatDuration(
  startedAt?: number | null,
  completedAt?: number | null
) {
  if (!startedAt || !completedAt) return null
  const diffMs = completedAt - startedAt
  if (diffMs < 1000) return `${diffMs}ms`
  return `${(diffMs / 1000).toFixed(1)}s`
}

function getStepDisplayName(rawName?: string) {
  if (!rawName) return "Step"
  if (rawName.includes("getByRank")) return "1. Fetch App Metadata"
  if (rawName.includes("setResearchStatus")) return "Update Research Status"
  if (rawName.includes("searchAppDocs"))
    return "2. Exa Neural Search (Docs & Auth)"
  if (rawName.includes("extractResearchFindings"))
    return "3. LLM Reasoning & Extraction"
  if (rawName.includes("updateResearch")) return "4. Save Findings to Database"
  return rawName
}

export function WorkflowStepItem({
  stepRecord,
  index: _index,
}: {
  stepRecord: any
  index: number
}) {
  const [expanded, setExpanded] = React.useState(false)
  // Support both direct step object (from workflow.listSteps) or nested stepRecord.step
  const step = stepRecord.step ?? stepRecord
  const runResult = step.runResult ?? {}
  const isFailed = runResult.kind === "failed" || !!runResult.error
  const isInProgress = step.inProgress || (!step.completedAt && !isFailed)
  const duration = formatDuration(step.startedAt, step.completedAt)
  const displayName = getStepDisplayName(step.name)

  return (
    <div className="overflow-hidden rounded-lg border bg-card text-xs text-card-foreground transition-all">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between p-2.5 text-left transition-colors hover:bg-muted/40"
      >
        <div className="flex min-w-0 items-center gap-2 pr-2">
          {isInProgress ? (
            <Loader2 className="size-3.5 shrink-0 animate-spin text-blue-500" />
          ) : isFailed ? (
            <AlertCircle className="size-3.5 shrink-0 text-destructive" />
          ) : (
            <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500" />
          )}
          <span className="truncate font-medium">{displayName}</span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 text-[10px] text-muted-foreground">
          {duration && <span>{duration}</span>}
          <Badge
            variant={
              isFailed ? "destructive" : isInProgress ? "secondary" : "outline"
            }
            className="h-4 px-1 py-0 text-[9px] uppercase"
          >
            {isFailed ? "Failed" : isInProgress ? "Running" : "Success"}
          </Badge>
          {expanded ? (
            <ChevronDown className="ml-0.5 size-3.5 text-muted-foreground" />
          ) : (
            <ChevronRight className="ml-0.5 size-3.5 text-muted-foreground" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="flex flex-col gap-2 border-t bg-muted/20 p-2.5 font-mono text-[11px]">
          {/* Error Details */}
          {runResult.error && (
            <div className="rounded border border-destructive/30 bg-destructive/10 p-2 text-destructive">
              <span className="mb-1 block font-bold">Error message:</span>
              <pre className="font-sans text-[11px] leading-relaxed break-words whitespace-pre-wrap">
                {typeof runResult.error === "string"
                  ? runResult.error
                  : JSON.stringify(runResult.error, null, 2)}
              </pre>
            </div>
          )}

          {/* Sources summary if searchAppDocs */}
          {runResult.returnValue?.sources &&
            Array.isArray(runResult.returnValue.sources) && (
              <div className="flex flex-col gap-1 font-sans">
                <span className="font-mono text-[10px] font-semibold text-muted-foreground uppercase">
                  Extracted Sources ({runResult.returnValue.sources.length})
                </span>
                <ul className="flex flex-col gap-1">
                  {runResult.returnValue.sources.map((s: any, idx: number) => (
                    <li key={idx} className="truncate">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline"
                      >
                        {s.title || s.url}
                        <ExternalLink className="size-2.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Inputs summary */}
          {step.args && (
            <div>
              <span className="mb-0.5 block text-[10px] font-semibold text-muted-foreground uppercase">
                Inputs:
              </span>
              <pre className="subtle-scroll max-h-36 overflow-y-auto rounded bg-background p-2 text-[10px] leading-tight text-foreground">
                {JSON.stringify(step.args, null, 2)}
              </pre>
            </div>
          )}

          {/* Outputs summary */}
          {runResult.returnValue && (
            <div>
              <span className="mb-0.5 block text-[10px] font-semibold text-muted-foreground uppercase">
                Output:
              </span>
              <pre className="subtle-scroll max-h-36 overflow-y-auto rounded bg-background p-2 text-[10px] leading-tight text-foreground">
                {JSON.stringify(runResult.returnValue, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
