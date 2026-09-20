"use client"

import { createColumnHelper } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { DataTableColumnHeader } from "./data-table-column-header"
import { type DataTableFeatures } from "./data-table-features"
import {
  accessLabels,
  authLabels,
  buildabilityLabels,
  categoryLabels,
  type Category,
  type AppResearch,
} from "./data"

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

export const columns = columnHelper.columns([
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("rank", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="#" />
    ),
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
        <div className="flex max-w-[16rem] min-w-0 flex-col gap-0.5">
          <span className="truncate font-medium">{app.name}</span>
          <a
            href={
              app.website.startsWith("http")
                ? app.website
                : `https://${app.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
            title={app.website}
            className="truncate text-muted-foreground text-xs underline-offset-2 hover:text-foreground hover:underline"
          >
            {app.website}
          </a>
        </div>
      )
    },
  }),
  columnHelper.accessor("category", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    filterFn: "arrHas",
    cell: ({ row }) => categoryLabels[row.getValue("category") as Category],
  }),
  columnHelper.accessor((row) => row.authMethods ?? [], {
    id: "authMethods",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Auth" />
    ),
    filterFn: "arrHas",
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
      <DataTableColumnHeader column={column} title="Access" />
    ),
    filterFn: "arrHas",
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
    filterFn: "arrHas",
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
      <DataTableColumnHeader column={column} title="Verdict" />
    ),
    filterFn: "arrHas",
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
  columnHelper.display({
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const app = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" size="icon" className="size-8" />}
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
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
                <DropdownMenuItem disabled>No docs URL yet</DropdownMenuItem>
              )}
              {app.blocker ? (
                <DropdownMenuItem disabled>{app.blocker}</DropdownMenuItem>
              ) : null}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }),
])
