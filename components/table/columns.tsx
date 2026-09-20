"use client"

import * as React from "react"
import { createColumnHelper } from "@tanstack/react-table"
import {
  MoreHorizontal,
  Play,
  Loader2,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Eye,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableColumnHeaderFilter } from "./data-table-column-header-filter"
import { type DataTableFeatures } from "./data-table-features"
import {
  accessLabels,
  authLabels,
  buildabilityLabels,
  categoryLabels,
  researchStatusLabels,
  ACCESS_MODELS,
  AUTH_METHODS,
  BUILDABILITY,
  CATEGORIES,
  RESEARCH_STATUSES,
  type Category,
  type AppResearch,
} from "./data"

const categoryOptions = CATEGORIES.map((value) => ({
  label: categoryLabels[value],
  value,
}))

const authOptions = AUTH_METHODS.map((value) => ({
  label: authLabels[value],
  value,
}))

const accessOptions = ACCESS_MODELS.map((value) => ({
  label: accessLabels[value],
  value,
}))

const mcpOptions = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
]

const verdictOptions = BUILDABILITY.map((value) => ({
  label: buildabilityLabels[value],
  value,
}))

const statusOptions = RESEARCH_STATUSES.map((value) => ({
  label: researchStatusLabels[value],
  value,
}))

const columnHelper = createColumnHelper<DataTableFeatures, AppResearch>()

const buildabilityVariants = {
  ready: "default",
  caveats: "secondary",
  blocked: "destructive",
  unknown: "outline",
} as const

function EmptyCell() {
  return <span className="text-muted-foreground">—</span>
}

export interface ColumnActionHandlers {
  onOpenAppDetail?: (app: AppResearch) => void
  onRunResearch?: (rank: number) => Promise<void> | void
}

export function createColumns(handlers: ColumnActionHandlers = {}) {
  return columnHelper.columns([
    columnHelper.accessor("rank", {
      header: () => null,
      meta: {
        className: "w-8 text-center",
      },
      cell: ({ row }) => (
        <span className="text-muted-foreground tabular-nums">
          {row.getValue("rank")}
        </span>
      ),
    }),
    columnHelper.accessor("name", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="App" />
      ),
      filterFn: "includesString",
      cell: ({ row }) => {
        const app = row.original
        return (
          <div className="flex max-w-[10rem] min-w-0 flex-col gap-0.5 sm:max-w-[12rem]">
            <button
              type="button"
              onClick={() => handlers.onOpenAppDetail?.(app)}
              className="cursor-pointer truncate text-left font-medium transition-colors hover:text-primary hover:underline"
            >
              {app.name}
            </button>
            <a
              href={
                app.website.startsWith("http")
                  ? app.website
                  : `https://${app.website}`
              }
              target="_blank"
              rel="noopener noreferrer"
              title={app.website}
              className="block truncate text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
            >
              {app.website}
            </a>
          </div>
        )
      },
    }),
    columnHelper.accessor("category", {
      header: ({ column }) => (
        <DataTableColumnHeaderFilter
          column={column}
          title="Category"
          options={categoryOptions}
        />
      ),
      enableSorting: false,
      filterFn: "arrHas",
      cell: ({ row }) => categoryLabels[row.getValue("category") as Category],
    }),
    columnHelper.accessor((row) => row.authMethods ?? [], {
      id: "authMethods",
      header: ({ column }) => (
        <DataTableColumnHeaderFilter
          column={column}
          title="Auth"
          options={authOptions}
        />
      ),
      enableSorting: false,
      filterFn: "arrHas",
      meta: {
        className: "hidden md:table-cell",
      },
      cell: ({ row }) => {
        const methods = row.original.authMethods
        if (!methods || methods.length === 0) {
          return <EmptyCell />
        }
        return (
          <div className="flex flex-wrap gap-1">
            {methods.map((method) => (
              <Badge key={method} variant="outline">
                {authLabels[method]}
              </Badge>
            ))}
          </div>
        )
      },
    }),
    columnHelper.accessor("access", {
      header: ({ column }) => (
        <DataTableColumnHeaderFilter
          column={column}
          title="Access"
          options={accessOptions}
        />
      ),
      enableSorting: false,
      filterFn: "arrHas",
      meta: {
        className: "hidden lg:table-cell",
      },
      cell: ({ row }) => {
        const access = row.original.access
        if (!access) {
          return <EmptyCell />
        }
        return accessLabels[access]
      },
    }),
    columnHelper.accessor("hasOfficialMcp", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="MCP" />
      ),
      enableSorting: false,
      filterFn: "arrHas",
      meta: {
        className: "hidden xl:table-cell",
      },
      cell: ({ row }) => {
        const mcp = row.original.hasOfficialMcp
        if (mcp == null) {
          return <EmptyCell />
        }
        return mcp ? "Yes" : "No"
      },
    }),
    columnHelper.accessor("buildability", {
      header: ({ column }) => (
        <DataTableColumnHeaderFilter
          column={column}
          title="Verdict"
          options={verdictOptions}
        />
      ),
      enableSorting: false,
      filterFn: "arrHas",
      meta: {
        className: "hidden sm:table-cell",
      },
      cell: ({ row }) => {
        const verdict = row.original.buildability
        if (!verdict) {
          return <EmptyCell />
        }
        return (
          <Badge variant={buildabilityVariants[verdict]}>
            {buildabilityLabels[verdict]}
          </Badge>
        )
      },
    }),
    columnHelper.accessor((row) => row.researchStatus ?? "not_started", {
      id: "researchStatus",
      header: ({ column }) => (
        <DataTableColumnHeaderFilter
          column={column}
          title="Status"
          options={statusOptions}
        />
      ),
      enableSorting: false,
      filterFn: "arrHas",
      cell: ({ row }) => {
        const app = row.original
        const status =
          app.researchStatus ?? (app.buildability ? "completed" : "not_started")

        if (status === "completed") {
          return (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-3.5" /> Done
            </span>
          )
        }
        if (status === "running" || status === "queued") {
          return (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400">
              <Loader2 className="size-3.5 animate-spin" />
              {status === "queued" ? "Queued" : "Researching"}
            </span>
          )
        }
        if (status === "failed") {
          return (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-destructive">
              <AlertCircle className="size-3.5" /> Failed
            </span>
          )
        }
        return <span className="text-xs text-muted-foreground">Pending</span>
      },
    }),
    columnHelper.display({
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const app = row.original
        const status =
          app.researchStatus ?? (app.buildability ? "completed" : "not_started")
        const isRunning = status === "queued" || status === "running"

        return (
          <div className="flex items-center justify-end gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant={
                        status === "completed"
                          ? "ghost"
                          : status === "failed"
                            ? "destructive"
                            : "secondary"
                      }
                      size="sm"
                      className="h-7 gap-1 px-2 text-xs"
                      disabled={isRunning}
                      onClick={async () => {
                        if (status === "completed") {
                          handlers.onOpenAppDetail?.(app)
                        } else {
                          await handlers.onRunResearch?.(app.rank)
                        }
                      }}
                    />
                  }
                >
                  {isRunning ? (
                    <>
                      <Loader2 className="size-3 animate-spin" />
                      <span className="hidden sm:inline">Running</span>
                    </>
                  ) : status === "completed" ? (
                    <>
                      <Eye className="size-3" />
                      <span className="hidden sm:inline">View</span>
                    </>
                  ) : status === "failed" ? (
                    <>
                      <RefreshCw className="size-3" />
                      <span className="hidden sm:inline">Retry</span>
                    </>
                  ) : (
                    <>
                      <Play className="size-3" />
                      <span className="hidden sm:inline">Run</span>
                    </>
                  )}
                </TooltipTrigger>
                <TooltipContent side="left">
                  {status === "completed"
                    ? "View researched findings"
                    : isRunning
                      ? "Agent currently researching..."
                      : status === "failed"
                        ? "Retry research workflow"
                        : "Run Exa + Mistral research"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" size="icon" className="size-8" />
                }
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => handlers.onOpenAppDetail?.(app)}
                  >
                    See details
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handlers.onRunResearch?.(app.rank)}
                    disabled={isRunning}
                  >
                    {status === "completed" ? "Re-run agent" : "Run agent"}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(app.name)}
                  >
                    Copy app name
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(app.website)}
                  >
                    Copy website
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {app.docsUrl ? (
                    <DropdownMenuItem
                      onClick={() => window.open(app.docsUrl ?? "", "_blank")}
                    >
                      Open docs
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem disabled>
                      No docs URL yet
                    </DropdownMenuItem>
                  )}
                  {app.blocker ? (
                    <DropdownMenuItem disabled>{app.blocker}</DropdownMenuItem>
                  ) : null}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    }),
  ])
}

export const columns = createColumns()
