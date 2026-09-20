"use client"

import * as React from "react"
import { useQuery } from "convex/react"
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  History,
  ListOrdered,
  Loader2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { api } from "@/convex/_generated/api"
import { WorkflowStepItem } from "./workflow-step-item"

interface WorkflowRunListProps {
  workflowIds: string[]
  isRunning: boolean
  appStatus?: string
  appError?: string | null
}

function formatRelativeTime(ts?: number | null) {
  if (!ts) return null
  const diffMs = Date.now() - ts
  const diffSec = Math.floor(diffMs / 1000)
  if (diffSec < 60) return `${diffSec}s ago`
  const diffMin = Math.floor(diffSec / 60)
  if (diffMin < 60) return `${diffMin}m ago`
  const diffHours = Math.floor(diffMin / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  return `${Math.floor(diffHours / 24)}d ago`
}

function RunItem({
  run,
  runIndex,
  totalRuns,
  isExpanded,
  onToggle,
}: {
  run: {
    workflowId: string
    status: string
    startedAt?: number | null
    completedAt?: number | null
    error?: string | null
  }
  runIndex: number
  totalRuns: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const isLatest = runIndex === 0
  const runNumber = totalRuns - runIndex

  const workflowSteps = useQuery(
    api.apps.getWorkflowSteps,
    isExpanded ? { workflowId: run.workflowId } : "skip"
  )

  const sortedSteps = React.useMemo(() => {
    if (!workflowSteps || !Array.isArray(workflowSteps)) return []
    return [...workflowSteps].sort((a, b) => (a.stepNumber ?? 0) - (b.stepNumber ?? 0))
  }, [workflowSteps])

  const isFailed = run.status === "failed" || !!run.error
  const isInProgress =
    run.status === "running" || run.status === "queued" || (!run.completedAt && !isFailed)

  return (
    <div className="rounded-lg border bg-card text-card-foreground text-xs overflow-hidden transition-all">
      <button
        type="button"
        onClick={onToggle}
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

          <div className="flex items-center gap-1.5 truncate">
            <span className="font-semibold">Run #{runNumber}</span>
            {isLatest && (
              <Badge variant="secondary" className="text-[9px] px-1 py-0 h-3.5">
                Latest
              </Badge>
            )}
            <span className="text-muted-foreground text-[11px] truncate">
              {formatRelativeTime(run.startedAt) ?? run.workflowId.slice(0, 8)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 text-[10px] text-muted-foreground">
          <Badge
            variant={isFailed ? "destructive" : isInProgress ? "secondary" : "outline"}
            className="text-[9px] px-1.5 py-0 h-4 uppercase font-mono"
          >
            {isFailed ? "Failed" : isInProgress ? "Running" : "Success"}
          </Badge>
          {isExpanded ? (
            <ChevronDown className="size-3.5 text-muted-foreground ml-0.5" />
          ) : (
            <ChevronRight className="size-3.5 text-muted-foreground ml-0.5" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t bg-muted/10 p-2.5 flex flex-col gap-2">
          {run.error && (
            <div className="rounded bg-destructive/10 border border-destructive/30 p-2 text-destructive font-mono text-[11px]">
              <span className="font-bold block mb-1">Workflow Error:</span>
              <p className="whitespace-pre-wrap leading-relaxed">{run.error}</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] uppercase font-semibold text-muted-foreground font-mono flex items-center gap-1">
              <ListOrdered className="size-3" /> Execution Steps ({sortedSteps.length})
            </span>
            <span className="text-[10px] text-muted-foreground font-mono">
              ID: {run.workflowId.slice(0, 12)}...
            </span>
          </div>

          {workflowSteps === undefined ? (
            <div className="flex items-center justify-center p-3 text-muted-foreground gap-1.5">
              <Loader2 className="size-3 animate-spin" />
              <span className="text-[11px]">Loading step traces...</span>
            </div>
          ) : sortedSteps.length > 0 ? (
            <div className="flex flex-col gap-2 pt-1">
              {sortedSteps.map((stepRecord: any, idx: number) => (
                <WorkflowStepItem
                  key={stepRecord._id ?? idx}
                  stepRecord={stepRecord}
                  index={idx}
                />
              ))}
            </div>
          ) : (
            <div className="rounded border border-dashed p-3 text-center text-xs text-muted-foreground">
              No individual step records saved for this run.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function WorkflowRunList({
  workflowIds,
  isRunning,
  appStatus,
  appError,
}: WorkflowRunListProps) {
  // Query status of all historical runs
  const runs = useQuery(
    api.apps.getWorkflowRuns,
    workflowIds.length > 0 ? { workflowIds } : "skip"
  )

  // Default expand latest run (index 0)
  const [expandedWorkflowId, setExpandedWorkflowId] = React.useState<string | null>(
    workflowIds[0] ?? null
  )

  // Keep track of the first workflow ID to initialize expanded state once or when a new run starts
  const previousFirstIdRef = React.useRef<string | null>(workflowIds[0] ?? null)

  React.useEffect(() => {
    const currentFirstId = workflowIds[0] ?? null
    // If a brand new run was added at the top, switch expansion to the new run
    if (currentFirstId && currentFirstId !== previousFirstIdRef.current) {
      setExpandedWorkflowId(currentFirstId)
      previousFirstIdRef.current = currentFirstId
    } else if (expandedWorkflowId && !workflowIds.includes(expandedWorkflowId)) {
      // If the currently expanded run was deleted/removed from list
      setExpandedWorkflowId(null)
    }
  }, [workflowIds, expandedWorkflowId])

  // Enhance run items with app-level status for the latest run if workflow table was cleared
  const resolvedRuns = React.useMemo(() => {
    const list =
      runs && runs.length > 0
        ? runs
        : workflowIds.map((id) => ({
            workflowId: id,
            status: isRunning ? "running" : "unknown",
            error: null as string | null,
          }))

    return list.map((r, idx) => {
      // If it's the latest run and the app itself is recorded as failed or completed
      if (idx === 0) {
        let status = r.status
        let error = r.error
        if (appStatus === "failed") {
          status = "failed"
          error = error ?? appError ?? "Workflow failed"
        } else if (appStatus === "completed" && status !== "failed") {
          status = "completed"
        }
        return { ...r, status, error }
      }
      return r
    })
  }, [runs, workflowIds, isRunning, appStatus, appError])

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
          <History className="size-3.5" /> Research Run History
        </h4>
        {workflowIds.length > 0 && (
          <span className="text-[11px] text-muted-foreground font-mono">
            {workflowIds.length} run{workflowIds.length === 1 ? "" : "s"}
          </span>
        )}
      </div>

      {workflowIds.length > 0 ? (
        <div className="flex flex-col gap-2">
          {resolvedRuns.map((run, idx) => (
            <RunItem
              key={run.workflowId}
              run={run}
              runIndex={idx}
              totalRuns={workflowIds.length}
              isExpanded={expandedWorkflowId === run.workflowId}
              onToggle={() =>
                setExpandedWorkflowId((prev) =>
                  prev === run.workflowId ? null : run.workflowId
                )
              }
            />
          ))}
        </div>
      ) : isRunning ? (
        <div className="rounded-lg border border-dashed p-4 flex flex-col items-center justify-center gap-1.5 text-muted-foreground text-center">
          <Loader2 className="size-4 animate-spin text-blue-500" />
          <span className="text-xs font-medium">Starting workflow run...</span>
          <span className="text-[11px]">Traces and step logs will appear here</span>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed p-3 text-center text-xs text-muted-foreground">
          No execution runs recorded yet. Click Run Research to execute Exa + Mistral agent steps.
        </div>
      )}
    </div>
  )
}
