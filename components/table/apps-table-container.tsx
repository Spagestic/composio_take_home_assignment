"use client"

import { useQuery } from "convex/react"

import { api } from "@/convex/_generated/api"
import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import { type AppResearch } from "@/components/table/data"

export function AppsTableContainer({ initialData }: { initialData: AppResearch[] }) {
  // Query Convex apps if available; if backend is not yet populated or connecting, fallback seamlessly
  const convexApps = useQuery(api.apps.list, {})
  const data = (convexApps && convexApps.length > 0 ? convexApps : initialData) as AppResearch[]

  return <DataTable columns={columns} data={data} />
}
