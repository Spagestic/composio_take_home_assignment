export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "a1b2c3d4",
    amount: 450,
    status: "success",
    email: "lisa@example.com",
  },
  {
    id: "e5f6g7h8",
    amount: 89,
    status: "pending",
    email: "omar@example.org",
  },
  {
    id: "i9j0k1l2",
    amount: 1200,
    status: "failed",
    email: "priya@example.net",
  },
  {
    id: "n3o4p5q6",
    amount: 64,
    status: "processing",
    email: "noah@example.com",
  },
  {
    id: "r7s8t9u0",
    amount: 332,
    status: "success",
    email: "ava@example.com",
  },
]
