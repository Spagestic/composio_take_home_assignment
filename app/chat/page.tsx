"use client"

import { useMutation, useQuery } from "convex/react"
import {
  ArrowUpIcon,
  GlobeIcon,
  ImageIcon,
  MessageCircleDashedIcon,
  PaperclipIcon,
  PlusIcon,
  RotateCwIcon,
  TelescopeIcon,
} from "lucide-react"
import { FormEvent, useEffect, useState } from "react"

import { api } from "@/convex/_generated/api"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "@/components/ui/toast"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export default function LlmPage() {
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const startTurn = useMutation(api.chat.startTurn)
  const messages = useQuery(
    api.chat.listBySession,
    sessionId ? { sessionId } : "skip"
  )

  useEffect(() => {
    setSessionId(crypto.randomUUID())
  }, [])

  const isSubmitting =
    messages?.some(
      (message) =>
        message.role === "assistant" &&
        (message.status === "pending" || message.status === "streaming")
    ) ?? false

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextPrompt = prompt.trim()
    if (!nextPrompt || isSubmitting || !sessionId) {
      return
    }

    setPrompt("")
    try {
      await startTurn({ sessionId, prompt: nextPrompt })
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to generate a response"
      toast.add({ title: message })
      setPrompt(nextPrompt)
    }
  }

  function resetConversation() {
    setPrompt("")
    setSessionId(crypto.randomUUID())
  }

  return (
    <main className="flex min-h-svh items-center justify-center p-4">
      <MessageScrollerProvider autoScroll>
        <div className="relative flex w-full flex-col gap-4">
          <Card className="mx-auto h-140 w-full max-w-sm gap-0">
            <CardHeader className="gap-1 border-b">
              <CardTitle>New Chat</CardTitle>
              <CardDescription>How can I help you today?</CardDescription>
              <CardAction>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Reset conversation"
                      />
                    }
                    onClick={resetConversation}
                    disabled={isSubmitting}
                  >
                    <RotateCwIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reset</p>
                  </TooltipContent>
                </Tooltip>
              </CardAction>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              {!messages || messages.length === 0 ? (
                <Empty className="h-full">
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <MessageCircleDashedIcon />
                    </EmptyMedia>
                    <EmptyTitle>Morning!</EmptyTitle>
                    <EmptyDescription>
                      What are we working on today? Write a message to start a
                      new conversation.
                    </EmptyDescription>
                  </EmptyHeader>
                </Empty>
              ) : (
                <MessageScroller>
                  <MessageScrollerViewport>
                    <MessageScrollerContent
                      aria-busy={isSubmitting}
                      className="p-(--card-spacing)"
                    >
                      {messages.map((message) => {
                        const isStreaming =
                          message.status === "pending" ||
                          message.status === "streaming"
                        const displayText =
                          message.text.length > 0
                            ? message.text
                            : isStreaming
                              ? "Thinking…"
                              : (message.error ?? "")

                        return (
                          <MessageScrollerItem
                            key={message._id}
                            messageId={message._id}
                            scrollAnchor={message.role === "user"}
                          >
                            <Message
                              align={message.role === "user" ? "end" : "start"}
                            >
                              <MessageContent>
                                <Bubble
                                  variant={
                                    message.status === "error"
                                      ? "destructive"
                                      : message.role === "user"
                                        ? "default"
                                        : "muted"
                                  }
                                  align={
                                    message.role === "user" ? "end" : "start"
                                  }
                                >
                                  <BubbleContent
                                    className={cn(
                                      "whitespace-pre-wrap",
                                      isStreaming &&
                                        message.text.length === 0 &&
                                        "shimmer"
                                    )}
                                  >
                                    {displayText}
                                  </BubbleContent>
                                </Bubble>
                              </MessageContent>
                            </Message>
                          </MessageScrollerItem>
                        )
                      })}
                    </MessageScrollerContent>
                  </MessageScrollerViewport>
                  <MessageScrollerButton />
                </MessageScroller>
              )}
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <form onSubmit={handleSubmit} className="w-full">
                <InputGroup>
                  <InputGroupTextarea
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                    placeholder="Ask anything…"
                    disabled={isSubmitting || !sessionId}
                    rows={2}
                  />
                  <InputGroupAddon align="block-end" className="pt-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <InputGroupButton
                            aria-label="Add tools"
                            type="button"
                            size="icon-sm"
                            variant="outline"
                          />
                        }
                      >
                        <PlusIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        side="top"
                        className="w-44"
                      >
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <PaperclipIcon />
                            Add Photos & Files
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <ImageIcon />
                            Create Image
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TelescopeIcon />
                            Deep Research
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <GlobeIcon />
                            Web Search
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <InputGroupButton
                      type="submit"
                      variant="default"
                      size="icon-sm"
                      disabled={
                        isSubmitting || !sessionId || prompt.trim().length === 0
                      }
                      className="ml-auto"
                    >
                      {isSubmitting ? <Spinner /> : <ArrowUpIcon />}
                      <span className="sr-only">Send</span>
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </CardFooter>
          </Card>
          <div className="px-0.5 text-center text-xs text-muted-foreground">
            Messages stream from Gemini in real time.
          </div>
        </div>
      </MessageScrollerProvider>
    </main>
  )
}
