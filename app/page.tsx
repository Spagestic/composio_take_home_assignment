import { Suspense } from "react"

import { CaseStudy } from "@/components/case-study/case-study"
import { AppsTableContainer } from "@/components/table/apps-table-container"
import { apps, type AppResearch } from "@/components/table/data"

async function getData(): Promise<AppResearch[]> {
  return apps
}

export default async function Page() {
  const initialData = await getData()

  return (
    <div className="container mx-auto flex max-w-6xl flex-col gap-10 py-10">
      <CaseStudy />
      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Live proof: the full table
          </h2>
          <p className="text-sm text-muted-foreground">
            Every row shows the verdict, findings, verification pass, catalog
            baseline, and workflow traces. Open a row to inspect the run.
          </p>
        </div>
        <Suspense>
          <AppsTableContainer initialData={initialData} />
        </Suspense>
      </section>
    </div>
  )
}