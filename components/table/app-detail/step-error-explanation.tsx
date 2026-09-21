import * as React from "react"
import { AlertCircle, HelpCircle } from "lucide-react"

interface StepErrorExplanationProps {
  error: any
}

export function StepErrorExplanation({ error }: StepErrorExplanationProps) {
  const errorStr = typeof error === "string" ? error : JSON.stringify(error)

  const explanation = React.useMemo(() => {
    if (/finish_reason: length|truncated|token limit/i.test(errorStr)) {
      return {
        title: "Output Token Limit Reached",
        description:
          "The LLM spent its output token budget on reasoning or verbose fields before completing the structured JSON payload. The system now automatically increases maxTokens to 8192-16384 and prompts for terser fields on retry.",
      }
    }
    if (/rate limit|429|quota|too many requests|overloaded/i.test(errorStr)) {
      return {
        title: "Model Rate Limited or Overloaded",
        description:
          "The Modal LLM proxy reported high concurrency or quota exhaustion. The system performs exponential backoff with jitter.",
      }
    }
    if (/invalid JSON/i.test(errorStr)) {
      return {
        title: "Malformed Model Response",
        description:
          "The model output could not be parsed as valid JSON. This usually occurs when output is truncated mid-stream or surrounded by unescaped formatting.",
      }
    }
    if (/Exa search failed/i.test(errorStr)) {
      return {
        title: "Search API Error",
        description:
          "Exa neural search failed to return results or hit network issues. The step retries up to 3 times.",
      }
    }
    return null
  }, [errorStr])

  return (
    <div className="rounded border border-destructive/30 bg-destructive/10 p-2 text-destructive font-sans text-[11px]">
      <div className="flex items-center gap-1.5 font-bold mb-1">
        <AlertCircle className="size-3.5 shrink-0" />
        <span>{explanation?.title ?? "Execution Error"}</span>
      </div>

      {explanation && (
        <p className="text-muted-foreground text-[10px] leading-relaxed mb-2 font-sans bg-background/50 p-1.5 rounded border border-border/40">
          {explanation.description}
        </p>
      )}

      <pre className="font-mono text-[10px] leading-tight break-words whitespace-pre-wrap rounded bg-background/60 p-1.5 text-destructive/90 overflow-x-auto max-h-32">
        {errorStr}
      </pre>
    </div>
  )
}
