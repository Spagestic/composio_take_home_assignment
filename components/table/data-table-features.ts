import {
  columnFacetingFeature,
  columnFilteringFeature,
  columnVisibilityFeature,
  createFacetedRowModel,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
} from "@tanstack/react-table"

const filterFn_hasAny = (
  row: { getValue: (columnId: string) => unknown },
  columnId: string,
  filterValue: unknown
) => {
  const selectedValues = Array.isArray(filterValue) ? filterValue : []
  if (selectedValues.length === 0) return true

  const cellValue = row.getValue(columnId)
  const cellValues = Array.isArray(cellValue) ? cellValue : [cellValue]

  return selectedValues.some((value) => cellValues.includes(value))
}

export const features = tableFeatures({
  columnFacetingFeature,
  columnFilteringFeature,
  columnVisibilityFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  filterFns: {
    includesString: filterFn_includesString,
    hasAny: filterFn_hasAny,
  },
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
})

export type DataTableFeatures = typeof features
