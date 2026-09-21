"use client"

import * as React from "react"
import { useQuery } from "convex/react"
import {
  BookOpen,
  ExternalLink,
  CheckCircle2,
  XCircle,
  FileCode,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { api } from "@/convex/_generated/api"
import { type AppResearch } from "../data"
import { DetailRow } from "./detail-row"

interface ComposioCatalogBaselineProps {
  app: AppResearch
}

export function ComposioCatalogBaseline({ app }: ComposioCatalogBaselineProps) {
  const baseline = useQuery(api.catalog.getByRank, { rank: app.rank })

  const inCatalog = baseline ? baseline.inCatalog : app.composioInCatalog
  const slug = baseline?.composioSlug ?? app.composioSlug
  const kind = baseline?.composioToolkitKind ?? app.composioToolkitKind
  const canonicalUrl =
    baseline?.canonicalDocsUrl ??
    (slug ? `https://docs.composio.dev/toolkits/${slug}.md` : null)
  const snapshotPath =
    baseline?.snapshotPath ?? (slug ? `data/${slug}.md` : null)

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <BookOpen className="size-3 text-muted-foreground" />
          <h4 className="font-semibold uppercase tracking-wider text-muted-foreground text-[11px]">
            Composio Catalog Baseline
          </h4>
        </div>

        <Badge
          variant={inCatalog ? "outline" : "secondary"}
          className="text-[10px] h-4 px-1.5 uppercase font-mono"
        >
          {inCatalog ? (
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-2.5" /> In Catalog
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <XCircle className="size-2.5" /> Not in Catalog
            </span>
          )}
        </Badge>
      </div>

      {inCatalog ? (
        <div className="flex flex-col gap-2">
          {baseline?.headlineSummary && (
            <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2">
              {baseline.headlineSummary}
            </p>
          )}

          <div className="flex flex-col rounded-md border border-border/60 bg-card px-3 py-1">
            <DetailRow
              label="Toolkit Slug"
              value={<span className="font-mono text-xs">{slug ?? "—"}</span>}
            />

            <DetailRow
              label="Type"
              value={
                kind ? (
                  <Badge variant="outline" className="text-[10px] h-4 py-0 px-1 font-mono uppercase">
                    {kind}
                  </Badge>
                ) : (
                  "—"
                )
              }
            />

            <DetailRow
              label="Auth Scheme"
              value={baseline?.composioAuth ?? "—"}
            />

            <DetailRow
              label="Composio OAuth"
              value={baseline?.composioOauthAvailable ?? "—"}
            />

            <DetailRow
              label="Tools / Triggers"
              value={
                <span className="font-mono text-xs">
                  {baseline?.toolCount != null ? baseline.toolCount : "—"} tools •{" "}
                  {baseline?.triggerCount != null ? baseline.triggerCount : "—"} triggers
                </span>
              }
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1 pt-0.5">
            {snapshotPath && (
              <span className="inline-flex items-center gap-1 font-mono text-[10px]">
                <FileCode className="size-2.5" /> {snapshotPath}
              </span>
            )}
            {canonicalUrl && (
              <a
                href={canonicalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1 font-sans text-[11px] ml-auto"
              >
                Official Toolkit <ExternalLink className="size-2.5" />
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-md border border-dashed border-border/60 bg-muted/20 p-2.5 text-xs text-muted-foreground">
          <p className="leading-relaxed text-[11px]">
            {baseline?.absenceReason ??
              "This app is one of 33 apps not in the Composio catalog snapshot. Evaluated independently without a pre-existing toolkit baseline."}
          </p>
        </div>
      )}
    </div>
  )
}
