"use client"

import { type HTMLAttributes } from "react"
import { type Column, type RowData } from "@tanstack/react-table"
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronsUpDown,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { type DataTableFeatures } from "./data-table-features"

export interface FilterOption {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

interface DataTableColumnHeaderFilterProps<TData extends RowData, TValue>
  extends HTMLAttributes<HTMLDivElement> {
  column: Column<DataTableFeatures, TData, TValue>
  title: string
  options?: readonly FilterOption[] | FilterOption[]
}

export function DataTableColumnHeaderFilter<TData extends RowData, TValue>({
  column,
  title,
  options,
  className,
}: DataTableColumnHeaderFilterProps<TData, TValue>) {
  const isSorted = column.getIsSorted()
  const filterValue = column.getFilterValue() as string[] | undefined
  const selectedValues = new Set(filterValue ?? [])
  const hasFilter = selectedValues.size > 0
  const canSort = column.getCanSort()

  const toggleOption = (optVal: string) => {
    const next = new Set(selectedValues)
    if (next.has(optVal)) {
      next.delete(optVal)
    } else {
      next.add(optVal)
    }
    const arr = Array.from(next)
    column.setFilterValue(arr.length ? arr : undefined)
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "-ml-3 h-8 gap-1.5 data-popup-open:bg-accent",
                hasFilter && "font-semibold text-primary"
              )}
            />
          }
        >
          <span>{title}</span>

          {hasFilter ? (
            <Badge
              variant="secondary"
              className="h-4.5 rounded px-1 text-[10px] font-medium"
            >
              {selectedValues.size}
            </Badge>
          ) : null}

          {canSort ? (
            isSorted === "desc" ? (
              <ArrowDown className="size-3.5 text-primary" />
            ) : isSorted === "asc" ? (
              <ArrowUp className="size-3.5 text-primary" />
            ) : (
              <ChevronsUpDown className="size-3.5 text-muted-foreground" />
            )
          ) : (
            <ChevronDown className="size-3.5 text-muted-foreground" />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-max min-w-32 max-w-56">
          {canSort ? (
            <>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                  <ArrowUp />
                  Sort Ascending
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                  <ArrowDown />
                  Sort Descending
                </DropdownMenuItem>
                {isSorted ? (
                  <DropdownMenuItem onClick={() => column.clearSorting()}>
                    <ChevronsUpDown />
                    Clear Sort
                  </DropdownMenuItem>
                ) : null}
              </DropdownMenuGroup>
              {options && options.length > 0 ? <DropdownMenuSeparator /> : null}
            </>
          ) : null}

          {options && options.length > 0 ? (
            <>
              <div className="max-h-56 overflow-y-auto pr-1 subtle-scroll">
                {options.map((opt) => {
                  const checked = selectedValues.has(opt.value)
                  return (
                    <DropdownMenuCheckboxItem
                      key={opt.value}
                      checked={checked}
                      onClick={(e) => {
                        // Prevent menu from closing immediately on check toggle
                        e.preventDefault()
                        toggleOption(opt.value)
                      }}
                    >
                      {opt.icon ? (
                        <opt.icon className="size-3.5 text-muted-foreground" />
                      ) : null}
                      <span className="truncate">{opt.label}</span>
                    </DropdownMenuCheckboxItem>
                  )
                })}
              </div>

              {hasFilter ? (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => column.setFilterValue(undefined)}
                    className="justify-center text-center font-medium text-muted-foreground"
                  >
                    Clear Filter
                  </DropdownMenuItem>
                </>
              ) : null}
            </>
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
