"use client"

import * as React from "react"
import { useTable, type ColumnDef, type RowData } from "@tanstack/react-table"

import { Loader2, Play, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "./data-table-pagination"
import { features, type DataTableFeatures } from "./data-table-features"
import { useDataTableSearchParams } from "./search-params"
import { type AppResearch } from "./data"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface DataTableProps<TData extends RowData & { rank: number }> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]
  onRunRemaining?: () => Promise<void>
  isStartingBulk?: boolean
}

export function DataTable<TData extends RowData & { rank: number }>({
  columns,
  data,
  onRunRemaining,
  isStartingBulk = false,
}: DataTableProps<TData>) {
  const {
    sorting,
    pagination,
    columnFilters,
    columnVisibility,
    onSortingChange,
    onPaginationChange,
    onColumnFiltersChange,
    onColumnVisibilityChange,
  } = useDataTableSearchParams()

  const table = useTable({
    features,
    data,
    columns,
    getRowId: (row) => String(row.rank),
    onSortingChange,
    onPaginationChange,
    onColumnFiltersChange,
    onColumnVisibilityChange,
    autoResetPageIndex: false,
    state: {
      sorting,
      pagination,
      columnFilters,
      columnVisibility,
    },
  })

  // Summary counts for research progress
  const apps = data as unknown as AppResearch[]
  const researchCounts = React.useMemo(
    () =>
      apps.reduce(
        (counts, app) => {
          const status =
            app.researchStatus ??
            (app.buildability ? "completed" : "not_started")
          if (status === "completed") counts.completed += 1
          if (status === "failed") counts.failed += 1
          if (status === "queued" || status === "running") counts.active += 1
          if (status === "not_started") counts.remaining += 1
          return counts
        },
        { completed: 0, failed: 0, active: 0, remaining: 0 }
      ),
    [apps]
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 flex-nowrap items-center gap-2">
          <Input
            placeholder="Filter apps..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-xs"
          />
          {table.state.columnFilters.length > 0 ? (
            <Button variant="ghost" onClick={() => table.resetColumnFilters()}>
              Reset
              <X data-icon="inline-end" />
            </Button>
          ) : null}
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button
                  variant="default"
                  size="sm"
                  disabled={isStartingBulk || researchCounts.remaining === 0}
                />
              }
            >
              {isStartingBulk ? (
                <Loader2 className="animate-spin" data-icon="inline-start" />
              ) : (
                <Play data-icon="inline-start" />
              )}
              {isStartingBulk ? "Starting..." : "Run remaining"}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Run remaining research?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will start research for {researchCounts.remaining} apps
                  that have not been researched yet. Completed, failed, and
                  currently active apps will not be changed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => void onRunRemaining?.()}>
                  Start research
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="text-xs text-muted-foreground" aria-live="polite">
          {researchCounts.completed}/{apps.length} completed ·{" "}
          {researchCounts.active} active · {researchCounts.remaining} remaining
          {researchCounts.failed > 0
            ? ` · ${researchCounts.failed} failed`
            : ""}
        </div>
      </div>

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta as
                    { className?: string } | undefined
                  return (
                    <TableHead key={header.id} className={meta?.className}>
                      {header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    const meta = cell.column.columnDef.meta as
                      { className?: string } | undefined
                    return (
                      <TableCell key={cell.id} className={meta?.className}>
                        <table.FlexRender cell={cell} />
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
