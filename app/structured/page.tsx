"use client"

import { useAction } from "convex/react"
import { CopyIcon } from "lucide-react"
import { FormEvent, useState } from "react"

import { api } from "@/convex/_generated/api"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
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

export default function StructuredPlaygroundPage() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<StructuredTask | null>(null)
  const [error, setError] = useState<string | null>(null)

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
    <main className="mx-auto flex min-h-svh w-full max-w-xl flex-col justify-center gap-6 px-4 py-10">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold tracking-tight">Structured task</h1>
        <p className="text-sm text-muted-foreground">
          Turn a task description into validated JSON.
        </p>
      </header>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Describe a task</CardTitle>
            <CardDescription>Powered by Kimi K3 via Modal.</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field data-disabled={isLoading || undefined}>
                <FieldLabel htmlFor="prompt-input">Task</FieldLabel>
                <Textarea
                  id="prompt-input"
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  placeholder="Renew the SSL certificate before Friday."
                  rows={4}
                  maxLength={4000}
                  disabled={isLoading}
                />
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              type="submit"
              disabled={isLoading || prompt.trim().length === 0}
            >
              {isLoading && <Spinner data-icon="inline-start" />}
              {isLoading ? "Extracting…" : "Extract"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {result && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-1">
                <CardTitle>{result.title}</CardTitle>
                <CardDescription>{result.summary}</CardDescription>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={handleCopyJson}
                aria-label="Copy JSON"
              >
                <CopyIcon />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{result.priority} priority</Badge>
              <Badge variant="secondary">
                {result.isCompleted ? "Completed" : "Pending"}
              </Badge>
              {result.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <pre className="overflow-x-auto rounded-md bg-muted p-3 text-xs">
              {JSON.stringify(result, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </main>
  )
}
