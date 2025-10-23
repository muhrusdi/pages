import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  const accessToken = request.cookies.get("accessToken")

  if (accessToken) {
    requestHeaders.set("Authorization", "Bearer " + accessToken.value)
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.cookies.set("accessToken", process.env.ACCESS_TOKEN as string)

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
