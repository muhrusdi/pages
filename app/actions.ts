"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export const actions = async (formData: FormData) => {
  cookies().set("sort_by", formData.get("sort_by") as string, { maxAge: 0 })
  cookies().set("page", formData.get("page") as string, { maxAge: 0 })
  return { page: formData.get("page"), sort_by: formData.get("sort_by") }
}

export const filterAction = async (formData: FormData) => {
  "use server"
  cookies().set("sort_by", formData.get("sort_by") as string, { maxAge: 1 })
  cookies().set("page", formData.get("page") as string, { maxAge: 1 })
  revalidatePath("/")
}
