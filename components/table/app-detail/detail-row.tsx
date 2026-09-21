import * as React from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface DetailRowProps {
  label: React.ReactNode
  value: React.ReactNode
  citationUrl?: string | null
  citationLabel?: string
  hint?: React.ReactNode
  className?: string
}

export function DetailRow({
  label,
  value,
  citationUrl,
  citationLabel = "Source",
  hint,
  className,
}: DetailRowProps) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-3 py-1.5 text-xs border-b border-border/40 last:border-b-0",
        className
      )}
    >
      <div className="flex items-center gap-1.5 text-muted-foreground shrink-0 min-w-[110px] sm:min-w-[130px]">
        <span className="font-medium text-[11px] uppercase tracking-wider">{label}</span>
        {hint}
      </div>
      <div className="flex items-center justify-end gap-1.5 text-right font-normal min-w-0">
        <div className="truncate text-foreground font-medium">{value}</div>
        {citationUrl && (
          <a
            href={citationUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`${citationLabel}: ${citationUrl}`}
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center shrink-0"
          >
            <ExternalLink className="size-2.5" />
          </a>
        )}
      </div>
    </div>
  )
}
