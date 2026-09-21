"use client"

import * as React from "react"
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { type AppResearch } from "../data"
import { DetailRow } from "./detail-row"

interface VerificationSummaryProps {
  app: AppResearch
}

export function VerificationSummary({ app }: VerificationSummaryProps) {
  const [showChecks, setShowChecks] = React.useState(false)
  const verification = app.verification

  if (!verification) {
    return null
  }

  const {
    confidence,
    summary,
    fieldChecks,
    catalogComparison,
    catalogNotes,
    correctionsApplied,
  } = verification

  const catalogBadgeVariant =
    catalogComparison === "match"
      ? "outline"
      : catalogComparison === "mismatch"
        ? "destructive"
        : "secondary"

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
          <ShieldCheck className="size-3 text-emerald-500" /> Accuracy & Verification
        </h4>

        <div className="flex items-center gap-1.5">
          <Badge
            variant={confidence === "high" ? "outline" : "secondary"}
            className="text-[10px] h-4 px-1.5 font-mono capitalize"
          >
            {confidence} confidence
          </Badge>

          <Badge
            variant={catalogBadgeVariant}
            className="text-[10px] h-4 px-1.5 font-mono uppercase"
          >
            Catalog: {catalogComparison}
          </Badge>
        </div>
      </div>

      <div className="flex flex-col rounded-md border border-border/60 bg-card px-3 py-1">
        <DetailRow
          label="Verification Assessment"
          value={<span className="text-[11px] leading-snug">{summary}</span>}
        />

        {catalogNotes && (
          <DetailRow
            label="Catalog Cross-check"
            value={<span className="text-[11px] leading-snug text-muted-foreground">{catalogNotes}</span>}
          />
        )}

        <DetailRow
          label="Revisions Applied"
          value={
            correctionsApplied > 0 ? (
              <span className="font-semibold text-amber-600 dark:text-amber-400 font-mono">
                {correctionsApplied} field{correctionsApplied === 1 ? "" : "s"} corrected in verify pass
              </span>
            ) : (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium font-mono text-[11px]">
                0 corrections • First pass confirmed
              </span>
            )
          }
        />
      </div>

      {fieldChecks && fieldChecks.length > 0 && (
        <div className="flex flex-col gap-1.5 pt-0.5">
          <button
            type="button"
            onClick={() => setShowChecks(!showChecks)}
            className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            {showChecks ? (
              <ChevronDown className="size-3" />
            ) : (
              <ChevronRight className="size-3" />
            )}
            <span>View {fieldChecks.length} field-level checks</span>
          </button>

          {showChecks && (
            <div className="flex flex-col gap-1.5 rounded-md border border-border/40 bg-muted/20 p-2 text-[11px]">
              {fieldChecks.map((fc, i) => (
                <div key={i} className="flex flex-col gap-0.5 border-b border-border/30 pb-1.5 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono font-medium text-foreground">{fc.field}</span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px]">
                      {fc.verified ? (
                        <span className="text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-0.5">
                          <CheckCircle2 className="size-2.5" /> Confirmed
                        </span>
                      ) : (
                        <span className="text-amber-600 dark:text-amber-400 inline-flex items-center gap-0.5">
                          <AlertCircle className="size-2.5" /> Revised
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{fc.note}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
