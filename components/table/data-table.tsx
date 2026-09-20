"use client"

import * as React from "react"
import {
  useTable,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnVisibilityState,
  type RowData,
  type SortingState,
} from "@tanstack/react-table"

import { X } from "lucide-react"

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

import {
  accessFilterOptions,
  authFilterOptions,
  buildabilityFilterOptions,
  categoryFilterOptions,
  DataTableFacetedFilter,
} from "./data-table-faceted-filter"
import { DataTablePagination } from "./data-table-pagination"
import { DataTableViewOptions } from "./data-table-view-options"
import { features, type DataTableFeatures } from "./data-table-features"

interface DataTableProps<TData extends RowData & { rank: number }> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]
}

export function DataTable<TData extends RowData & { rank: number }>({
  columns,
  data,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useTable({
    features,
    data,
    columns,
    getRowId: (row) => String(row.rank),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Input
          placeholder="Filter apps..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {table.getColumn("category") ? (
          <DataTableFacetedFilter
            column={table.getColumn("category")}
            title="Category"
            options={categoryFilterOptions}
          />
        ) : null}
        {table.getColumn("authMethods") ? (
          <DataTableFacetedFilter
            column={table.getColumn("authMethods")}
            title="Auth"
            options={authFilterOptions}
          />
        ) : null}
        {table.getColumn("access") ? (
          <DataTableFacetedFilter
            column={table.getColumn("access")}
            title="Access"
            options={accessFilterOptions}
          />
        ) : null}
        {table.getColumn("buildability") ? (
          <DataTableFacetedFilter
            column={table.getColumn("buildability")}
            title="Verdict"
            options={buildabilityFilterOptions}
          />
        ) : null}
        {table.state.columnFilters.length > 0 ? (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <X data-icon="inline-end" />
          </Button>
        ) : null}
        <DataTableViewOptions table={table} />
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
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
