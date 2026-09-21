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
import { FormattedStepView } from "./step-formatters"
import { StepErrorExplanation } from "./step-error-explanation"

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
  if (rawName.includes("fetchDocsContent"))
    return "3. Fetch Primary Documentation"
  if (rawName.includes("extractResearchFindings"))
    return "4. LLM Reasoning & Extraction"
  if (rawName.includes("verifyResearchFindings"))
    return "5. LLM Audit & Verification"
  if (rawName.includes("updateResearch")) return "6. Save Findings to Database"
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
  const [showRaw, setShowRaw] = React.useState(false)

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
        <div className="flex flex-col gap-2.5 border-t bg-muted/15 p-2.5 text-[11px]">
          {/* Error Details with human explanation */}
          {runResult.error && (
            <StepErrorExplanation error={runResult.error} />
          )}

          {/* Formatted View (Clean high-level UI) */}
          {!showRaw && (
            <FormattedStepView
              stepName={step.name ?? ""}
              args={step.args}
              returnValue={runResult.returnValue}
            />
          )}

          {/* Raw JSON toggle */}
          <div className="flex items-center justify-between pt-1 border-t border-border/40 text-[10px] text-muted-foreground font-mono">
            <span>Payload details</span>
            <button
              type="button"
              onClick={() => setShowRaw(!showRaw)}
              className="text-primary hover:underline"
            >
              {showRaw ? "Show formatted" : "Show raw JSON"}
            </button>
          </div>

          {showRaw && (
            <div className="flex flex-col gap-2 font-mono text-[10px]">
              {step.args && (
                <div>
                  <span className="mb-0.5 block font-semibold text-muted-foreground uppercase">
                    Inputs:
                  </span>
                  <pre className="subtle-scroll max-h-36 overflow-y-auto rounded bg-background p-2 leading-tight text-foreground border border-border/40">
                    {JSON.stringify(step.args, null, 2)}
                  </pre>
                </div>
              )}

              {runResult.returnValue && (
                <div>
                  <span className="mb-0.5 block font-semibold text-muted-foreground uppercase">
                    Output:
                  </span>
                  <pre className="subtle-scroll max-h-36 overflow-y-auto rounded bg-background p-2 leading-tight text-foreground border border-border/40">
                    {JSON.stringify(runResult.returnValue, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
