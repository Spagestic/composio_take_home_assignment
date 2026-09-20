import { Suspense } from "react"

import { AppsTableContainer } from "@/components/table/apps-table-container"
import { apps, type AppResearch } from "@/components/table/data"

async function getData(): Promise<AppResearch[]> {
  return apps
}

export default async function Page() {
  const initialData = await getData()

  return (
    <div className="container mx-auto py-10">
      <Suspense>
        <AppsTableContainer initialData={initialData} />
      </Suspense>
    </div>
  )
}
