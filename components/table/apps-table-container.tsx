"use client"

import * as React from "react"
import { useMutation, useQuery } from "convex/react"

import { api } from "@/convex/_generated/api"
import { createColumns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import { AppDetailSheet } from "@/components/table/app-details"
import { type AppResearch } from "@/components/table/data"

export function AppsTableContainer({
  initialData,
}: {
  initialData: AppResearch[]
}) {
  // Query Convex apps if available; if backend is not yet populated or connecting, fallback seamlessly
  const convexApps = useQuery(api.apps.list, {})
  const data = (
    convexApps && convexApps.length > 0 ? convexApps : initialData
  ) as AppResearch[]

  const startResearch = useMutation(api.research.startResearch)
  const startUnresearched = useMutation(api.research.startUnresearched)
  const [selectedApp, setSelectedApp] = React.useState<AppResearch | null>(null)
  const [sheetOpen, setSheetOpen] = React.useState(false)
  const [isStartingBulk, setIsStartingBulk] = React.useState(false)

  // Keep selected app synchronized with live convex updates
  const currentSelectedApp = React.useMemo(() => {
    if (!selectedApp) return null
    return data.find((a) => a.rank === selectedApp.rank) ?? selectedApp
  }, [data, selectedApp])

  const handleOpenAppDetail = React.useCallback((app: AppResearch) => {
    setSelectedApp(app)
    setSheetOpen(true)
  }, [])

  const handleRunResearch = React.useCallback(
    async (rank: number) => {
      try {
        await startResearch({ rank })
      } catch (err) {
        console.error("Failed to start research for app #" + rank, err)
      }
    },
    [startResearch]
  )

  const handleRunRemaining = React.useCallback(async () => {
    try {
      setIsStartingBulk(true)
      await startUnresearched({})
    } catch (err) {
      console.error("Failed to start remaining research", err)
    } finally {
      setIsStartingBulk(false)
    }
  }, [startUnresearched])

  const columns = React.useMemo(
    () =>
      createColumns({
        onOpenAppDetail: handleOpenAppDetail,
        onRunResearch: handleRunResearch,
      }),
    [handleOpenAppDetail, handleRunResearch]
  )

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        onRunRemaining={handleRunRemaining}
        isStartingBulk={isStartingBulk}
      />
      <AppDetailSheet
        app={currentSelectedApp}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </>
  )
}
