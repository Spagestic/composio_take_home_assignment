"use client"

import { useAction } from "convex/react"
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  CircleDotIcon,
  Code2Icon,
  CopyIcon,
  SparklesIcon,
} from "lucide-react"
import { FormEvent, useState } from "react"

import { api } from "@/convex/_generated/api"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/toast"

interface StructuredTask {
  title: string
  summary: string
  priority: "low" | "medium" | "high"
  tags: string[]
  isCompleted: boolean
}

const SAMPLE_PROMPTS = [
  {
    label: "UI Alignment",
    text: "Fix login button alignment on mobile screens so it sits centered below the input fields.",
  },
  {
    label: "SSL Expiry",
    text: "Renew database SSL certificate before Friday expiry to prevent connection downtime.",
  },
  {
    label: "Rate Limiting",
    text: "Add rate limiting headers to public API endpoints to protect against bursts of traffic.",
  },
]

const SCHEMA_DOCUMENTATION = `{
  title: string,
  summary: string,
  priority: "low" | "medium" | "high",
  tags: string[],
  isCompleted: boolean
}`

function getPriorityVariant(priority: StructuredTask["priority"]) {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "secondary"
    default:
      return "outline"
  }
}

export default function StructuredPlaygroundPage() {
  const [prompt, setPrompt] = useState(SAMPLE_PROMPTS[0]?.text ?? "")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<StructuredTask | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showRawJson, setShowRawJson] = useState(false)

  const analyze = useAction(api.structuredActions.analyzeTask)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextPrompt = prompt.trim()
    if (!nextPrompt || isLoading) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const data = await analyze({ prompt: nextPrompt })
      setResult(data)
      toast.add({ title: "Structured output generated successfully" })
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to generate structured output"
      setError(message)
      toast.add({ title: message })
    } finally {
      setIsLoading(false)
    }
  }

  function handleCopyJson() {
    if (!result) return
    void navigator.clipboard.writeText(JSON.stringify(result, null, 2))
    toast.add({ title: "JSON copied to clipboard" })
  }

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-5xl flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Badge variant="outline">Playground</Badge>
          <span className="text-xs text-muted-foreground">Gemini 3.6 Flash</span>
        </div>
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Structured Output Playground
        </h1>
        <p className="text-sm text-muted-foreground">
          Test typed JSON generation against a simple Zod task schema using the AI SDK and Gemini.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        {/* Left column: Input & Target Schema */}
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Input Prompt</CardTitle>
              <CardDescription>
                Describe any task or select a simple example below.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {SAMPLE_PROMPTS.map((sample) => (
                  <Button
                    key={sample.label}
                    type="button"
                    variant="outline"
                    size="xs"
                    disabled={isLoading}
                    onClick={() => setPrompt(sample.text)}
                  >
                    {sample.label}
                  </Button>
                ))}
              </div>

              <form id="structured-form" onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field data-disabled={isLoading || undefined}>
                    <FieldLabel htmlFor="prompt-input" className="sr-only">
                      Prompt text
                    </FieldLabel>
                    <Textarea
                      id="prompt-input"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g. Update user avatar upload size limit to 5MB..."
                      rows={5}
                      disabled={isLoading}
                      className="resize-y"
                    />
                    <FieldDescription>
                      The model extracts fields strictly matching the target task schema.
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter className="justify-between border-t pt-4">
              <span className="text-xs text-muted-foreground">
                {prompt.length} / 4000 characters
              </span>
              <Button
                type="submit"
                form="structured-form"
                disabled={isLoading || prompt.trim().length === 0}
              >
                {isLoading ? (
                  <>
                    <Spinner />
                    Extracting…
                  </>
                ) : (
                  <>
                    <SparklesIcon data-icon="inline-start" />
                    Extract Task
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle className="text-xs font-medium">Simple Zod Schema</CardTitle>
              <CardDescription>
                `structuredTaskSchema` validated by `generateStructured`
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-md bg-muted/60 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
                {SCHEMA_DOCUMENTATION}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Right column: Validated Result */}
        <div className="flex flex-col gap-6">
          <Card className="min-h-100">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <span>Extracted Task</span>
                {result && (
                  <Badge variant="secondary" className="gap-1">
                    <CheckCircle2Icon className="size-3" />
                    Valid
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>
                Typed and validated against the schema.
              </CardDescription>
              {result && (
                <CardAction className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="xs"
                    onClick={() => setShowRawJson(!showRawJson)}
                  >
                    <Code2Icon data-icon="inline-start" />
                    {showRawJson ? "Formatted View" : "Raw JSON"}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon-xs"
                    onClick={handleCopyJson}
                    aria-label="Copy JSON"
                  >
                    <CopyIcon />
                  </Button>
                </CardAction>
              )}
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4 pt-4">
              {isLoading && (
                <div className="flex flex-1 flex-col items-center justify-center gap-3 py-16 text-center text-muted-foreground">
                  <Spinner />
                  <p className="text-xs">
                    Calling Gemini 3.6 Flash & validating schema…
                  </p>
                </div>
              )}

              {error && !isLoading && (
                <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
                  <AlertCircleIcon className="size-4 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Extraction Error</span>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              {!result && !isLoading && !error && (
                <div className="flex flex-1 flex-col items-center justify-center gap-2 py-20 text-center text-muted-foreground">
                  <Code2Icon className="size-8 opacity-40" />
                  <p className="text-xs">
                    No output yet. Enter a task description and click extract.
                  </p>
                </div>
              )}

              {result && !isLoading && (
                <>
                  {showRawJson ? (
                    <pre className="max-h-100 overflow-auto rounded-md bg-muted/60 p-3 font-mono text-[11px] leading-relaxed text-foreground">
                      {JSON.stringify(result, null, 2)}
                    </pre>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                            Title
                          </span>
                          <h2 className="text-base font-semibold tracking-tight text-foreground">
                            {result.title}
                          </h2>
                        </div>
                        <Badge variant={result.isCompleted ? "secondary" : "outline"} className="gap-1">
                          {result.isCompleted ? (
                            <CheckCircle2Icon className="size-3" />
                          ) : (
                            <CircleDotIcon className="size-3" />
                          )}
                          {result.isCompleted ? "Completed" : "Pending"}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Priority:</span>
                        <Badge variant={getPriorityVariant(result.priority)}>
                          {result.priority}
                        </Badge>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                          Summary
                        </span>
                        <p className="rounded-md bg-muted/40 p-3 text-xs/relaxed text-muted-foreground">
                          {result.summary}
                        </p>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                          Tags
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {result.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
