"use server"

import { redirect } from "next/navigation"
import { parseWithZod } from "@conform-to/zod"
import { loginSchema } from "@/types"
import { wait } from "@/utils"

export const login = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  })

  await wait(4000)

  if (submission.status !== "success") {
    return submission.reply()
  }

  redirect("/")
}
