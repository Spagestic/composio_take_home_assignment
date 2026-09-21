"use client"

import * as React from "react"
import { useMutation } from "convex/react"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { type AppResearch } from "./data"
import { api } from "@/convex/_generated/api"

import {
  SheetHeaderSection,
  AgentFindings,
  WorkflowRunList,
  ComposioCatalogBaseline,
} from "./app-detail"

interface AppDetailSheetProps {
  app: AppResearch | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AppDetailSheet({
  app,
  open,
  onOpenChange,
}: AppDetailSheetProps) {
  const startResearch = useMutation(api.research.startResearch)
  const [isStarting, setIsStarting] = React.useState(false)

  // Derive workflow IDs list (fallback to single workflowId for backward compatibility)
  const workflowIds = React.useMemo(() => {
    if (!app) return []
    if (app.workflowIds && app.workflowIds.length > 0) return app.workflowIds
    if (app.workflowId) return [app.workflowId]
    return []
  }, [app?.workflowId, app?.workflowIds])

  if (!app) return null

  const status =
    app.researchStatus ?? (app.buildability ? "completed" : "not_started")
  const isRunning = status === "queued" || status === "running" || isStarting

  const handleRun = async () => {
    try {
      setIsStarting(true)
      await startResearch({ rank: app.rank })
    } catch (error) {
      console.error("Failed to start research:", error)
    } finally {
      setIsStarting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="flex max-h-[80dvh] min-h-0 w-[calc(100%-2rem)] max-w-md flex-col gap-0 overflow-hidden p-0 sm:max-h-[85dvh] sm:max-w-2xl lg:max-w-4xl"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{app.name} details</DialogTitle>
        <DialogHeader>
          <SheetHeaderSection
            app={app}
            status={status}
            isRunning={isRunning}
            onRun={handleRun}
          />
        </DialogHeader>

        <div className="subtle-scroll flex min-h-0 flex-1 flex-col gap-5 overflow-x-hidden overflow-y-auto overscroll-contain p-4 sm:p-6">
          {/* Ground Truth / Composio Baseline Section */}
          <ComposioCatalogBaseline app={app} />

          <Separator />

          {/* Core Agent Findings Section */}
          <AgentFindings app={app} />

          <Separator />

          {/* Research Run History & Execution Traces */}
          <WorkflowRunList
            workflowIds={workflowIds}
            isRunning={isRunning}
            appStatus={status}
            appError={app.researchError}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
