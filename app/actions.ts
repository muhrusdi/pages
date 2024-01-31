"use server"

import { cookies } from "next/headers"

export const actions = async (formData: FormData) => {
  cookies().set("sort_by", formData.get("sort_by") as string, { maxAge: 0 })
  cookies().set("page", formData.get("page") as string, { maxAge: 0 })
  return { page: formData.get("page"), sort_by: formData.get("sort_by") }
}
