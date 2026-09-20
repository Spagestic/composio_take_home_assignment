"use client"

import * as React from "react"
import { useMutation } from "convex/react"

import { Sheet, SheetContent } from "@/components/ui/sheet"
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
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeaderSection
          app={app}
          status={status}
          isRunning={isRunning}
          onRun={handleRun}
        />

        <div className="flex flex-col gap-5 p-6">
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
      </SheetContent>
    </Sheet>
  )
}
