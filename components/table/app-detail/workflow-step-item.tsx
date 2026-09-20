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

function formatDuration(startedAt?: number | null, completedAt?: number | null) {
  if (!startedAt || !completedAt) return null
  const diffMs = completedAt - startedAt
  if (diffMs < 1000) return `${diffMs}ms`
  return `${(diffMs / 1000).toFixed(1)}s`
}

function getStepDisplayName(rawName?: string) {
  if (!rawName) return "Step"
  if (rawName.includes("getByRank")) return "1. Fetch App Metadata"
  if (rawName.includes("setResearchStatus")) return "Update Research Status"
  if (rawName.includes("searchAppDocs")) return "2. Exa Neural Search (Docs & Auth)"
  if (rawName.includes("extractResearchFindings")) return "3. Gemini Reasoning & Extraction"
  if (rawName.includes("updateResearch")) return "4. Save Findings to Database"
  return rawName
}

export function WorkflowStepItem({ stepRecord, index: _index }: { stepRecord: any; index: number }) {
  const [expanded, setExpanded] = React.useState(false)
  // Support both direct step object (from workflow.listSteps) or nested stepRecord.step
  const step = stepRecord.step ?? stepRecord
  const runResult = step.runResult ?? {}
  const isFailed = runResult.kind === "failed" || !!runResult.error
  const isInProgress = step.inProgress || (!step.completedAt && !isFailed)
  const duration = formatDuration(step.startedAt, step.completedAt)
  const displayName = getStepDisplayName(step.name)

  return (
    <div className="rounded-lg border bg-card text-card-foreground text-xs overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full flex items-center justify-between p-2.5 hover:bg-muted/40 transition-colors text-left"
      >
        <div className="flex items-center gap-2 min-w-0 pr-2">
          {isInProgress ? (
            <Loader2 className="size-3.5 animate-spin text-blue-500 shrink-0" />
          ) : isFailed ? (
            <AlertCircle className="size-3.5 text-destructive shrink-0" />
          ) : (
            <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
          )}
          <span className="font-medium truncate">{displayName}</span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 text-[10px] text-muted-foreground">
          {duration && <span>{duration}</span>}
          <Badge
            variant={isFailed ? "destructive" : isInProgress ? "secondary" : "outline"}
            className="text-[9px] px-1 py-0 h-4 uppercase"
          >
            {isFailed ? "Failed" : isInProgress ? "Running" : "Success"}
          </Badge>
          {expanded ? (
            <ChevronDown className="size-3.5 text-muted-foreground ml-0.5" />
          ) : (
            <ChevronRight className="size-3.5 text-muted-foreground ml-0.5" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t bg-muted/20 p-2.5 flex flex-col gap-2 font-mono text-[11px]">
          {/* Error Details */}
          {runResult.error && (
            <div className="rounded bg-destructive/10 border border-destructive/30 p-2 text-destructive">
              <span className="font-bold block mb-1">Error message:</span>
              <pre className="whitespace-pre-wrap font-sans text-[11px] leading-relaxed break-words">
                {typeof runResult.error === "string"
                  ? runResult.error
                  : JSON.stringify(runResult.error, null, 2)}
              </pre>
            </div>
          )}

          {/* Sources summary if searchAppDocs */}
          {runResult.returnValue?.sources && Array.isArray(runResult.returnValue.sources) && (
            <div className="flex flex-col gap-1 font-sans">
              <span className="font-semibold text-[10px] uppercase text-muted-foreground font-mono">
                Extracted Sources ({runResult.returnValue.sources.length})
              </span>
              <ul className="flex flex-col gap-1">
                {runResult.returnValue.sources.map((s: any, idx: number) => (
                  <li key={idx} className="truncate">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-[11px] inline-flex items-center gap-1"
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
              <span className="text-muted-foreground block text-[10px] uppercase font-semibold mb-0.5">
                Inputs:
              </span>
              <pre className="max-h-36 overflow-y-auto rounded bg-background p-2 text-[10px] text-foreground leading-tight subtle-scroll">
                {JSON.stringify(step.args, null, 2)}
              </pre>
            </div>
          )}

          {/* Outputs summary */}
          {runResult.returnValue && (
            <div>
              <span className="text-muted-foreground block text-[10px] uppercase font-semibold mb-0.5">
                Output:
              </span>
              <pre className="max-h-36 overflow-y-auto rounded bg-background p-2 text-[10px] text-foreground leading-tight subtle-scroll">
                {JSON.stringify(runResult.returnValue, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
