import "server-only"
import { cookies, type UnsafeUnwrappedCookies } from "next/headers"

export const checkCookie = async () => {
  return (await cookies()).get("accessToken")?.value
}
