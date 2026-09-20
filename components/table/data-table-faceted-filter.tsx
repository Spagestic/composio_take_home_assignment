"use client"

import * as React from "react"
import { type Column, type RowData } from "@tanstack/react-table"
import { Check, PlusCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

import { type DataTableFeatures } from "./data-table-features"
import {
  ACCESS_MODELS,
  AUTH_METHODS,
  BUILDABILITY,
  CATEGORIES,
  accessLabels,
  authLabels,
  buildabilityLabels,
  categoryLabels,
} from "./data"

export const categoryFilterOptions = CATEGORIES.map((value) => ({
  label: categoryLabels[value],
  value,
}))

export const authFilterOptions = AUTH_METHODS.map((value) => ({
  label: authLabels[value],
  value,
}))

export const accessFilterOptions = ACCESS_MODELS.map((value) => ({
  label: accessLabels[value],
  value,
}))

export const buildabilityFilterOptions = BUILDABILITY.map((value) => ({
  label: buildabilityLabels[value],
  value,
}))

interface DataTableFacetedFilterProps<TData extends RowData, TValue> {
  column?: Column<DataTableFeatures, TData, TValue>
  title?: string
  options: {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
}

export function DataTableFacetedFilter<TData extends RowData, TValue>({
  column,
  title,
  options,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues()
  const selectedValues = new Set(column?.getFilterValue() as string[])

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <PlusCircle data-icon="inline-start" />
        {title}
        {selectedValues.size > 0 ? (
          <>
            <Separator orientation="vertical" className="mx-1 h-4" />
            <Badge
              variant="secondary"
              className="rounded-sm px-1 font-normal lg:hidden"
            >
              {selectedValues.size}
            </Badge>
            <div className="hidden gap-1 lg:flex">
              {selectedValues.size > 2 ? (
                <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                  {selectedValues.size} selected
                </Badge>
              ) : (
                options
                  .filter((option) => selectedValues.has(option.value))
                  .map((option) => (
                    <Badge
                      variant="secondary"
                      key={option.value}
                      className="rounded-sm px-1 font-normal"
                    >
                      {option.label}
                    </Badge>
                  ))
              )}
            </div>
          </>
        ) : null}
      </PopoverTrigger>
      <PopoverContent className="w-[200px] gap-0 p-0" align="start">
        <PopoverTitle className="sr-only">{title}</PopoverTitle>
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value)
                const count = facets?.get(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    data-checked={isSelected}
                    onSelect={() => {
                      const nextSelected = new Set(selectedValues)
                      if (isSelected) {
                        nextSelected.delete(option.value)
                      } else {
                        nextSelected.add(option.value)
                      }
                      const filterValues = Array.from(nextSelected)
                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      )
                    }}
                  >
                    <div
                      className={cn(
                        "flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input",
                        isSelected &&
                          "border-primary bg-primary text-primary-foreground"
                      )}
                    >
                      {isSelected ? <Check /> : null}
                    </div>
                    {option.icon ? (
                      <option.icon className="text-muted-foreground" />
                    ) : null}
                    <span>{option.label}</span>
                    {count != null ? (
                      <CommandShortcut>{count}</CommandShortcut>
                    ) : null}
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedValues.size > 0 ? (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            ) : null}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
