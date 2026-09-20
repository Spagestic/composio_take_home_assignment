"use client"

import * as React from "react"
import { ExternalLink, Loader2, Play, RefreshCw } from "lucide-react"

import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type AppResearch, categoryLabels, researchStatusLabels } from "../data"

interface SheetHeaderSectionProps {
  app: AppResearch
  status: NonNullable<AppResearch["researchStatus"]>
  isRunning: boolean
  onRun?: () => void
}

export function SheetHeaderSection({
  app,
  status,
  isRunning,
  onRun,
}: SheetHeaderSectionProps) {
  const statusBadgeVariant =
    status === "completed"
      ? "default"
      : status === "running" || status === "queued"
        ? "secondary"
        : status === "failed"
          ? "destructive"
          : "outline"

  return (
    <SheetHeader className="border-b pb-4">
      <div className="flex items-center justify-between gap-2 pr-8">
        <span className="font-mono text-xs text-muted-foreground">
          App #{app.rank}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <SheetTitle className="text-lg font-bold">{app.name}</SheetTitle>
        {onRun && (
          <Button
            size="xs"
            variant={status === "completed" ? "outline" : "default"}
            onClick={onRun}
            disabled={isRunning}
            className="h-7 gap-1 px-2 text-[11px]"
          >
            {isRunning ? (
              <>
                <Loader2 className="size-3 animate-spin" />
                <span>Running</span>
              </>
            ) : status === "completed" ? (
              <>
                <RefreshCw className="size-3" />
                <span>Re-run</span>
              </>
            ) : (
              <>
                <Play className="size-3" />
                <span>Run</span>
              </>
            )}
          </Button>
        )}
      </div>

      <SheetDescription className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        <span>{categoryLabels[app.category]}</span>
        <span>•</span>
        <a
          href={
            app.website.startsWith("http")
              ? app.website
              : `https://${app.website}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-foreground hover:underline"
        >
          {app.website}
          <ExternalLink className="size-3" />
        </a>
      </SheetDescription>
    </SheetHeader>
  )
}
