"use client"

import { useCallback, useMemo } from "react"
import {
  type ColumnFiltersState,
  type ColumnVisibilityState,
  type PaginationState,
  type SortingState,
} from "@tanstack/react-table"
import {
  createParser,
  debounce,
  parseAsArrayOf,
  parseAsIndex,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
  type UrlKeys,
} from "nuqs"

import {
  ACCESS_MODELS,
  AUTH_METHODS,
  BUILDABILITY,
  CATEGORIES,
  RESEARCH_STATUSES,
} from "./data"

type Updater<T> = T | ((old: T) => T)

function applyUpdater<T>(updater: Updater<T>, previous: T): T {
  if (typeof updater === "function") {
    return (updater as (old: T) => T)(previous)
  }
  return updater
}

const parseAsColumnSort = createParser({
  parse(query) {
    const [id, direction] = query.split(":")
    if (!id || (direction !== "asc" && direction !== "desc")) {
      return null
    }
    return { id, desc: direction === "desc" }
  },
  serialize(value) {
    return `${value.id}:${value.desc ? "desc" : "asc"}`
  },
  eq(a, b) {
    return a.id === b.id && a.desc === b.desc
  },
})

export const dataTableSearchParams = {
  name: parseAsString.withDefault("").withOptions({
    limitUrlUpdates: debounce(300),
  }),
  category: parseAsArrayOf(parseAsStringLiteral(CATEGORIES)).withDefault([]),
  auth: parseAsArrayOf(parseAsStringLiteral(AUTH_METHODS)).withDefault([]),
  access: parseAsArrayOf(parseAsStringLiteral(ACCESS_MODELS)).withDefault([]),
  verdict: parseAsArrayOf(parseAsStringLiteral(BUILDABILITY)).withDefault([]),
  status: parseAsArrayOf(parseAsStringLiteral(RESEARCH_STATUSES)).withDefault([]),
  sort: parseAsArrayOf(parseAsColumnSort).withDefault([]),
  pageIndex: parseAsIndex.withDefault(0),
  pageSize: parseAsInteger.withDefault(10),
  hide: parseAsArrayOf(parseAsString).withDefault([]),
}

export const dataTableUrlKeys: UrlKeys<typeof dataTableSearchParams> = {
  name: "q",
  pageIndex: "page",
  pageSize: "perPage",
}

function getFilterValue<T>(filters: ColumnFiltersState, id: string) {
  return filters.find((filter) => filter.id === id)?.value as T | undefined
}

export function useDataTableSearchParams() {
  const [params, setParams] = useQueryStates(dataTableSearchParams, {
    urlKeys: dataTableUrlKeys,
  })

  const sorting = params.sort
  const pagination = useMemo<PaginationState>(
    () => ({
      pageIndex: params.pageIndex,
      pageSize: params.pageSize,
    }),
    [params.pageIndex, params.pageSize]
  )
  const columnFilters = useMemo<ColumnFiltersState>(() => {
    const filters: ColumnFiltersState = []
    if (params.name) {
      filters.push({ id: "name", value: params.name })
    }
    if (params.category.length) {
      filters.push({ id: "category", value: params.category })
    }
    if (params.auth.length) {
      filters.push({ id: "authMethods", value: params.auth })
    }
    if (params.access.length) {
      filters.push({ id: "access", value: params.access })
    }
    if (params.verdict.length) {
      filters.push({ id: "buildability", value: params.verdict })
    }
    if (params.status.length) {
      filters.push({ id: "researchStatus", value: params.status })
    }
    return filters
  }, [
    params.access,
    params.auth,
    params.category,
    params.name,
    params.status,
    params.verdict,
  ])
  const columnVisibility = useMemo<ColumnVisibilityState>(
    () => Object.fromEntries(params.hide.map((id) => [id, false])),
    [params.hide]
  )

  const onSortingChange = useCallback(
    (updater: Updater<SortingState>) => {
      void setParams({
        sort: applyUpdater(updater, sorting),
        pageIndex: 0,
      })
    },
    [setParams, sorting]
  )

  const onPaginationChange = useCallback(
    (updater: Updater<PaginationState>) => {
      const next = applyUpdater(updater, pagination)
      void setParams({
        pageIndex: next.pageIndex,
        pageSize: next.pageSize,
      })
    },
    [pagination, setParams]
  )

  const onColumnFiltersChange = useCallback(
    (updater: Updater<ColumnFiltersState>) => {
      const next = applyUpdater(updater, columnFilters)
      void setParams({
        name: getFilterValue<string>(next, "name") ?? "",
        category: getFilterValue<typeof params.category>(next, "category") ?? [],
        auth: getFilterValue<typeof params.auth>(next, "authMethods") ?? [],
        access: getFilterValue<typeof params.access>(next, "access") ?? [],
        verdict:
          getFilterValue<typeof params.verdict>(next, "buildability") ?? [],
        status:
          getFilterValue<typeof params.status>(next, "researchStatus") ?? [],
        pageIndex: 0,
      })
    },
    [
      columnFilters,
      params.access,
      params.auth,
      params.category,
      params.status,
      params.verdict,
      setParams,
    ]
  )

  const onColumnVisibilityChange = useCallback(
    (updater: Updater<ColumnVisibilityState>) => {
      const next = applyUpdater(updater, columnVisibility)
      void setParams({
        hide: Object.entries(next)
          .filter(([, visible]) => visible === false)
          .map(([id]) => id),
      })
    },
    [columnVisibility, setParams]
  )

  return {
    sorting,
    pagination,
    columnFilters,
    columnVisibility,
    onSortingChange,
    onPaginationChange,
    onColumnFiltersChange,
    onColumnVisibilityChange,
  }
}
