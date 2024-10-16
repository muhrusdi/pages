"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export const actions = async (formData: FormData) => {
  (await cookies()).set("sort_by", formData.get("sort_by") as string, { maxAge: 0 })
  (await cookies()).set("page", formData.get("page") as string, { maxAge: 0 })
  return { page: formData.get("page"), sort_by: formData.get("sort_by") }
}

export const filterAction = async (formData: FormData) => {
  "use server"
  (await cookies()).set("sort_by", formData.get("sort_by") as string, { maxAge: 1 })
  (await cookies()).set("page", formData.get("page") as string, { maxAge: 1 })
  revalidatePath("/")
}
