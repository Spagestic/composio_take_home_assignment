import { columns } from "@/components/payments/columns"
import { DataTable } from "@/components/payments/data-table"
import { payments, type Payment } from "@/components/payments/data"

async function getData(): Promise<Payment[]> {
  return payments
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
