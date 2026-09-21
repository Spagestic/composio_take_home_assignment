"use client"

import * as React from "react"
import { ShieldCheck, ShieldAlert, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  type AppResearch,
  accessLabels,
  authLabels,
  buildabilityLabels,
} from "../data"

interface VerdictLineProps {
  app: AppResearch
}

export function VerdictLine({ app }: VerdictLineProps) {
  const buildabilityVariant =
    app.buildability === "ready"
      ? "default"
      : app.buildability === "caveats"
        ? "secondary"
        : app.buildability === "blocked"
          ? "destructive"
          : "outline"

  const verification = app.verification
  const isVerified = !!verification
  const confidence = verification?.confidence

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-muted/40 px-3 py-2 text-xs border border-border/60">
      <div className="flex flex-wrap items-center gap-1.5 min-w-0">
        <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mr-1">
          Verdict:
        </span>

        {app.buildability ? (
          <Badge
            variant={buildabilityVariant}
            className="text-[11px] h-5 px-2 font-semibold capitalize"
          >
            {buildabilityLabels[app.buildability]}
          </Badge>
        ) : (
          <span className="text-muted-foreground italic">Not evaluated</span>
        )}

        {app.access && (
          <>
            <span className="text-muted-foreground">•</span>
            <span className="font-medium text-foreground">
              {accessLabels[app.access]}
            </span>
          </>
        )}

        {app.authMethods && app.authMethods.length > 0 && (
          <>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground truncate">
              {app.authMethods.map((m) => authLabels[m] ?? m).join(", ")}
            </span>
          </>
        )}
      </div>

      <div className="flex items-center gap-1 shrink-0 font-mono text-[10px]">
        {isVerified ? (
          <Badge
            variant="outline"
            className="h-4.5 px-1.5 gap-1 text-[10px] border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20"
          >
            <ShieldCheck className="size-2.5" />
            <span>Verified ({confidence ?? "high"})</span>
          </Badge>
        ) : app.buildability ? (
          <Badge
            variant="outline"
            className="h-4.5 px-1.5 gap-1 text-[10px] text-muted-foreground"
          >
            <Sparkles className="size-2.5" />
            <span>Pass 1</span>
          </Badge>
        ) : null}
      </div>
    </div>
  )
}
