"use client"

import * as React from "react"
import { ExternalLink, FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  type AppResearch,
  accessLabels,
  authLabels,
  buildabilityLabels,
} from "../data"

interface AgentFindingsProps {
  app: AppResearch
}

export function AgentFindings({ app }: AgentFindingsProps) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Agent Findings
      </h4>

      {app.oneLiner ? (
        <p className="text-xs leading-relaxed italic bg-accent/40 rounded p-2.5 border">
          "{app.oneLiner}"
        </p>
      ) : (
        <p className="text-xs text-muted-foreground italic">
          No summary generated yet. Run the research agent to extract findings.
        </p>
      )}

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="rounded border p-2 flex flex-col gap-1">
          <span className="text-muted-foreground text-[10px] uppercase font-semibold">Buildability</span>
          <span className="font-medium">
            {app.buildability ? buildabilityLabels[app.buildability] : "—"}
          </span>
        </div>

        <div className="rounded border p-2 flex flex-col gap-1">
          <span className="text-muted-foreground text-[10px] uppercase font-semibold">Access Model</span>
          <span className="font-medium">
            {app.access ? accessLabels[app.access] : "—"}
          </span>
        </div>

        <div className="rounded border p-2 flex flex-col gap-1">
          <span className="text-muted-foreground text-[10px] uppercase font-semibold">Auth Methods</span>
          <div className="flex flex-wrap gap-1">
            {app.authMethods && app.authMethods.length > 0 ? (
              app.authMethods.map((m) => (
                <Badge key={m} variant="outline" className="text-[10px] py-0 px-1">
                  {authLabels[m] ?? m}
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">—</span>
            )}
          </div>
        </div>

        <div className="rounded border p-2 flex flex-col gap-1">
          <span className="text-muted-foreground text-[10px] uppercase font-semibold">Official MCP</span>
          <span className="font-medium">
            {app.hasOfficialMcp === null || app.hasOfficialMcp === undefined
              ? "—"
              : app.hasOfficialMcp
              ? "Yes"
              : "No"}
          </span>
        </div>
      </div>

      {/* Blocker */}
      {app.blocker && (
        <div className="rounded border p-2.5 flex flex-col gap-1 text-xs">
          <span className="text-muted-foreground text-[10px] uppercase font-semibold text-amber-500">
            Key Blocker / Constraint
          </span>
          <p className="text-xs leading-snug">{app.blocker}</p>
        </div>
      )}

      {/* Evidence & Documentation */}
      {app.evidenceNotes && (
        <div className="rounded border p-2.5 flex flex-col gap-1 text-xs">
          <span className="text-muted-foreground text-[10px] uppercase font-semibold flex items-center gap-1">
            <FileText className="size-3" /> Evidence Notes
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed">{app.evidenceNotes}</p>
        </div>
      )}

      {app.docsUrl && (
        <div className="flex items-center justify-between rounded border p-2 text-xs">
          <span className="text-muted-foreground">Official Documentation</span>
          <a
            href={app.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            Visit Docs <ExternalLink className="size-3" />
          </a>
        </div>
      )}
    </div>
  )
}
