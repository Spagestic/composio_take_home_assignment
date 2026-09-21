"use client"

import * as React from "react"
import {
  ExternalLink,
  FileText,
  AlertTriangle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  type AppResearch,
  accessLabels,
  authLabels,
  buildabilityLabels,
  apiBreadthLabels,
  apiStyleLabels,
} from "../data"
import { DetailRow } from "./detail-row"

interface AgentFindingsProps {
  app: AppResearch
}

export function AgentFindings({ app }: AgentFindingsProps) {
  const citations = app.citations

  // Build clean representation of API surface
  const apiSurfaceValue = React.useMemo(() => {
    const styles = app.apiStyles && app.apiStyles.length > 0
      ? app.apiStyles.map((s) => apiStyleLabels[s] ?? s.toUpperCase()).join(", ")
      : null
    const breadth = app.apiBreadth ? apiBreadthLabels[app.apiBreadth] : null

    if (styles && breadth) return `${styles} • ${breadth}`
    if (styles) return styles
    if (breadth) return breadth
    return "—"
  }, [app.apiStyles, app.apiBreadth])

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Agent Findings
        </h4>
        {app.docsUrl && (
          <a
            href={app.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-primary hover:underline inline-flex items-center gap-1 font-sans"
          >
            Docs URL <ExternalLink className="size-2.5" />
          </a>
        )}
      </div>

      {app.oneLiner ? (
        <p className="text-xs leading-relaxed italic text-muted-foreground bg-muted/20 rounded px-2.5 py-1.5 border border-border/40">
          "{app.oneLiner}"
        </p>
      ) : (
        <p className="text-xs text-muted-foreground italic">
          No research run yet. Click Run to research documentation, authentication, and buildability.
        </p>
      )}

      <div className="flex flex-col rounded-md border border-border/60 bg-card px-3 py-1">
        <DetailRow
          label="Buildability"
          value={app.buildability ? buildabilityLabels[app.buildability] : "—"}
          citationUrl={citations?.buildability ?? app.docsUrl}
          citationLabel="Buildability source"
        />

        <DetailRow
          label="Access Model"
          value={app.access ? accessLabels[app.access] : "—"}
          citationUrl={citations?.access}
          citationLabel="Access model source"
        />

        <DetailRow
          label="Auth Methods"
          value={
            app.authMethods && app.authMethods.length > 0 ? (
              <div className="flex flex-wrap justify-end gap-1">
                {app.authMethods.map((m) => (
                  <Badge key={m} variant="outline" className="text-[10px] h-4 py-0 px-1 font-mono">
                    {authLabels[m] ?? m}
                  </Badge>
                ))}
              </div>
            ) : (
              "—"
            )
          }
          citationUrl={citations?.auth}
          citationLabel="Auth documentation source"
        />

        <DetailRow
          label="API Surface"
          value={apiSurfaceValue}
          citationUrl={citations?.apiSurface}
          citationLabel="API reference source"
        />

        <DetailRow
          label="Official MCP"
          value={
            app.hasOfficialMcp === null || app.hasOfficialMcp === undefined
              ? "—"
              : app.hasOfficialMcp
              ? "Yes"
              : "No"
          }
          citationUrl={citations?.mcp}
          citationLabel="MCP documentation source"
        />
      </div>

      {/* Blocker constraint callout */}
      {app.blocker && (
        <div className="rounded-md border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 px-3 py-2 text-xs flex items-start gap-2">
          <AlertTriangle className="size-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-300">
              Key Blocker / Constraint
            </span>
            <p className="text-xs text-foreground leading-snug">{app.blocker}</p>
          </div>
        </div>
      )}

      {/* Evidence prose */}
      {app.evidenceNotes && (
        <div className="flex flex-col gap-1 text-xs pt-0.5">
          <span className="text-[10px] uppercase font-semibold text-muted-foreground flex items-center gap-1">
            <FileText className="size-2.5" /> Evidence Notes
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed pl-1">
            {app.evidenceNotes}
          </p>
        </div>
      )}
    </div>
  )
}
