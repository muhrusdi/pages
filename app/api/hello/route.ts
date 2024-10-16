import { cookies } from "next/headers"

export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  return Response.json({ test: "hellow" })
}
