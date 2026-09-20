"use client"

import * as React from "react"
import { useQuery } from "convex/react"
import {
  BookOpen,
  ExternalLink,
  ShieldCheck,
  Wrench,
  Zap,
  Info,
  CheckCircle2,
  XCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { api } from "@/convex/_generated/api"
import { type AppResearch } from "../data"

interface ComposioCatalogBaselineProps {
  app: AppResearch
}

export function ComposioCatalogBaseline({ app }: ComposioCatalogBaselineProps) {
  const baseline = useQuery(api.catalog.getByRank, { rank: app.rank })

  // If Convex data isn't loaded yet, fall back gracefully to the app's seeded catalog state
  const inCatalog = baseline ? baseline.inCatalog : app.composioInCatalog
  const slug = baseline?.composioSlug ?? app.composioSlug
  const kind = baseline?.composioToolkitKind ?? app.composioToolkitKind
  const canonicalUrl = baseline?.canonicalDocsUrl ?? (slug ? `https://docs.composio.dev/toolkits/${slug}.md` : null)
  const snapshotPath = baseline?.snapshotPath ?? (slug ? `data/${slug}.md` : null)

  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-card/60 p-3.5 text-xs text-card-foreground">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <BookOpen className="size-3.5 text-primary" />
          <h4 className="font-semibold uppercase tracking-wider text-muted-foreground text-[11px]">
            Composio Catalog Baseline
          </h4>
        </div>

        <Badge
          variant={inCatalog ? "default" : "secondary"}
          className="text-[10px] h-4 px-1.5 uppercase font-mono"
        >
          {inCatalog ? (
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="size-2.5" /> In Catalog
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <XCircle className="size-2.5" /> Absent (33 Set)
            </span>
          )}
        </Badge>
      </div>

      {inCatalog ? (
        <div className="flex flex-col gap-2.5">
          {baseline?.headlineSummary && (
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              {baseline.headlineSummary}
            </p>
          )}

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="rounded border bg-background/50 p-2 flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[10px] uppercase font-medium">Toolkit Slug</span>
              <span className="font-mono font-medium truncate">{slug ?? "—"}</span>
            </div>

            <div className="rounded border bg-background/50 p-2 flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[10px] uppercase font-medium">Type</span>
              <span className="font-medium uppercase">
                {kind ? (
                  <Badge variant="outline" className="text-[10px] h-4 py-0 px-1 font-mono">
                    {kind}
                  </Badge>
                ) : (
                  "—"
                )}
              </span>
            </div>

            <div className="rounded border bg-background/50 p-2 flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[10px] uppercase font-medium flex items-center gap-1">
                <ShieldCheck className="size-3" /> Auth Scheme
              </span>
              <span className="font-medium">
                {baseline?.composioAuth ?? "Documented in snapshot"}
              </span>
            </div>

            <div className="rounded border bg-background/50 p-2 flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[10px] uppercase font-medium">Composio OAuth</span>
              <span className="font-medium">
                {baseline?.composioOauthAvailable ?? "See snapshot"}
              </span>
            </div>

            <div className="rounded border bg-background/50 p-2 flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[10px] uppercase font-medium flex items-center gap-1">
                <Wrench className="size-3" /> Tools
              </span>
              <span className="font-medium font-mono">
                {baseline?.toolCount != null ? baseline.toolCount : "—"}
              </span>
            </div>

            <div className="rounded border bg-background/50 p-2 flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[10px] uppercase font-medium flex items-center gap-1">
                <Zap className="size-3" /> Triggers
              </span>
              <span className="font-medium font-mono">
                {baseline?.triggerCount != null ? baseline.triggerCount : "—"}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 pt-1 text-[11px] text-muted-foreground font-mono">
            {snapshotPath && (
              <div className="flex items-center justify-between border-t pt-1.5">
                <span className="text-[10px] uppercase text-muted-foreground">Local Snapshot:</span>
                <span className="text-foreground">{snapshotPath}</span>
              </div>
            )}
            {baseline?.snapshotVersion && (
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase text-muted-foreground">Snapshot Version:</span>
                <span className="text-foreground">{baseline.snapshotVersion}</span>
              </div>
            )}
            {canonicalUrl && (
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] uppercase text-muted-foreground font-sans">Official Page:</span>
                <a
                  href={canonicalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 font-sans"
                >
                  docs.composio.dev/toolkits/{slug}
                  <ExternalLink className="size-2.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 rounded bg-muted/40 p-2.5 text-xs text-muted-foreground">
          <div className="flex items-start gap-1.5">
            <Info className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {baseline?.absenceReason ??
                "This app is one of 33 apps not in the Composio catalog snapshot. The research agent should evaluate it independently without inventing an existing Composio toolkit."}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
