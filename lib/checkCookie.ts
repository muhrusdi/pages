import "server-only"
import { cookies } from "next/headers"

export const checkCookie = () => {
  return cookies().get("accessToken")?.value
}
