import { Suspense } from "react"

import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import { apps, type AppResearch } from "@/components/table/data"

async function getData(): Promise<AppResearch[]> {
  return apps
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <Suspense>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  )
}
