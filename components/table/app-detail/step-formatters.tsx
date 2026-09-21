import * as React from "react"
import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { StepTraceView } from "./step-trace"

interface FormattedStepProps {
  stepName: string
  args: any
  returnValue: any
}

export function FormattedStepView({ stepName, args, returnValue }: FormattedStepProps) {
  // 1. Fetch App Metadata
  if (stepName.includes("getByRank")) {
    return (
      <div className="flex flex-col gap-1 font-sans text-[11px]">
        <div className="flex items-center justify-between py-0.5 border-b border-border/30">
          <span className="text-muted-foreground">App Name:</span>
          <span className="font-semibold text-foreground">{returnValue?.name ?? "—"}</span>
        </div>
        <div className="flex items-center justify-between py-0.5 border-b border-border/30">
          <span className="text-muted-foreground">Website:</span>
          <span className="font-mono text-[10px] text-foreground">{returnValue?.website ?? "—"}</span>
        </div>
        <div className="flex items-center justify-between py-0.5 border-b border-border/30">
          <span className="text-muted-foreground">Category:</span>
          <span className="text-foreground">{returnValue?.category ?? "—"}</span>
        </div>
        <div className="flex items-center justify-between py-0.5">
          <span className="text-muted-foreground">Composio Catalog:</span>
          <Badge variant="outline" className="text-[10px] h-4 py-0 px-1 font-mono">
            {returnValue?.composioInCatalog ? "In Catalog" : "Absent (33 Set)"}
          </Badge>
        </div>
      </div>
    )
  }

  // 2. Exa Search
  if (stepName.includes("searchAppDocs")) {
    const sources = Array.isArray(returnValue?.sources) ? returnValue.sources : []
    const contextLen = returnValue?.contextText ? String(returnValue.contextText).length : 0

    return (
      <div className="flex flex-col gap-2 font-sans text-[11px]">
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Results retrieved: <strong className="text-foreground">{sources.length} sources</strong></span>
          <span>Context: <strong className="text-foreground font-mono">{contextLen.toLocaleString()} chars</strong></span>
        </div>

        {returnValue?.suggestedDocsUrl && (
          <div className="flex items-center justify-between py-1 px-2 rounded bg-background/50 border border-border/40 text-[11px]">
            <span className="text-muted-foreground">Suggested Primary Docs:</span>
            <a
              href={returnValue.suggestedDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1 font-mono text-[10px] truncate max-w-[240px]"
            >
              {returnValue.suggestedDocsUrl}
              <ExternalLink className="size-2.5 shrink-0" />
            </a>
          </div>
        )}

        {sources.length > 0 && (
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold uppercase text-muted-foreground font-mono">
              Search Results
            </span>
            <ul className="flex flex-col gap-1">
              {sources.map((s: any, idx: number) => (
                <li key={idx} className="flex items-center justify-between gap-2 truncate">
                  <span className="truncate text-foreground text-[11px]">{s.title || "Doc Page"}</span>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-[10px] text-primary hover:underline shrink-0 font-mono"
                  >
                    link <ExternalLink className="size-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  // 3. Fetch Primary Docs Content
  if (stepName.includes("fetchDocsContent")) {
    const textLen = returnValue?.text ? String(returnValue.text).length : 0
    return (
      <div className="flex flex-col gap-1.5 font-sans text-[11px]">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Target URL:</span>
          <a
            href={args?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-mono text-[10px] truncate max-w-[260px] inline-flex items-center gap-1"
          >
            {args?.url ?? "—"} <ExternalLink className="size-2.5" />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Extracted Content:</span>
          <span className="font-mono text-foreground font-medium">
            {returnValue?.success ? `${textLen.toLocaleString()} chars` : "Fetch failed / empty"}
          </span>
        </div>
      </div>
    )
  }

  // 4. LLM Reasoning & Extraction
  if (stepName.includes("extractResearchFindings")) {
    const trace = Array.isArray(returnValue?.trace) ? returnValue.trace : []

    return (
      <div className="flex flex-col gap-2 font-sans text-[11px]">
        {trace.length > 0 && <StepTraceView trace={trace} />}

        <div className="flex flex-col gap-1 rounded border border-border/50 bg-background/50 p-2">
          {returnValue?.oneLiner && (
            <p className="italic text-muted-foreground border-b border-border/30 pb-1.5 text-[11px]">
              "{returnValue.oneLiner}"
            </p>
          )}

          <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-1 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Buildability:</span>
              <span className="font-semibold capitalize text-foreground">{returnValue?.buildability ?? "—"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Access:</span>
              <span className="font-medium text-foreground">{returnValue?.access ?? "—"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Auth:</span>
              <span className="font-mono text-[10px] text-foreground">
                {Array.isArray(returnValue?.authMethods) ? returnValue.authMethods.join(", ") : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Official MCP:</span>
              <span className="font-medium text-foreground">{returnValue?.hasOfficialMcp ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 5. Verification Pass
  if (stepName.includes("verifyResearchFindings")) {
    const trace = Array.isArray(returnValue?.trace) ? returnValue.trace : []
    const fieldChecks = Array.isArray(returnValue?.fieldChecks) ? returnValue.fieldChecks : []

    return (
      <div className="flex flex-col gap-2 font-sans text-[11px]">
        {trace.length > 0 && <StepTraceView trace={trace} />}

        <div className="flex flex-col gap-1.5 rounded border border-border/50 bg-background/50 p-2">
          <div className="flex items-center justify-between border-b border-border/30 pb-1">
            <span className="text-muted-foreground">Confidence:</span>
            <Badge variant="outline" className="text-[10px] h-4 font-mono capitalize">
              {returnValue?.confidence ?? "unknown"}
            </Badge>
          </div>

          {returnValue?.summary && (
            <p className="text-foreground leading-relaxed text-[11px] pt-0.5">
              {returnValue.summary}
            </p>
          )}

          {fieldChecks.length > 0 && (
            <div className="flex flex-col gap-1 pt-1 border-t border-border/30">
              <span className="text-[10px] uppercase font-semibold text-muted-foreground font-mono">
                Field Checks ({fieldChecks.length})
              </span>
              {fieldChecks.map((fc: any, i: number) => (
                <div key={i} className="flex items-center justify-between text-[10px]">
                  <span className="font-mono text-muted-foreground">{fc.field}</span>
                  {fc.verified ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono inline-flex items-center gap-0.5">
                      <CheckCircle2 className="size-2.5" /> Confirmed
                    </span>
                  ) : (
                    <span className="text-amber-600 dark:text-amber-400 font-mono inline-flex items-center gap-0.5">
                      <AlertCircle className="size-2.5" /> Revised ({fc.corrected})
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  // 6. Save Findings
  if (stepName.includes("updateResearch")) {
    return (
      <div className="flex flex-col gap-1 font-sans text-[11px]">
        <span className="text-muted-foreground">
          Updated record rank <strong className="text-foreground font-mono">#{args?.rank}</strong> in database.
        </span>
        <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10px] text-muted-foreground">
          {args?.buildability && <Badge variant="secondary" className="h-4 px-1 text-[9px]">{args.buildability}</Badge>}
          {args?.access && <Badge variant="secondary" className="h-4 px-1 text-[9px]">{args.access}</Badge>}
          {args?.verification && (
            <Badge variant="outline" className="h-4 px-1 text-[9px] text-emerald-600 dark:text-emerald-400">
              Verified ({args.verification.confidence})
            </Badge>
          )}
        </div>
      </div>
    )
  }

  return null
}
