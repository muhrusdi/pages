"use server"

import { insertUser } from "@/drizzle/db"
import { schema, RoleSchema } from "./zod"
import { z } from "zod"
import { revalidatePath } from "next/cache"

export const createUserForm = async (formData: z.infer<typeof schema>) => {
  const validatedFields = schema.safeParse(formData)

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.formErrors.fieldErrors,
      data: formData,
    }
  }

  const result = await insertUser({
    email: formData.email,
    name: formData.name,
    password: formData.password,
    role: formData.role,
  })

  revalidatePath("/example/react-hook-form")

  return {
    data: result,
  }
}

export const createUser = async (prevData: any, formData: FormData) => {
  const validatedFields = schema.safeParse(Object.fromEntries(formData))

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.formErrors.fieldErrors,
      data: Object.fromEntries(formData),
    }
  }

  const result = await insertUser({
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    password: formData.get("password") as string,
    role: formData.get("role") as z.infer<typeof RoleSchema>,
  })

  return {
    data: result,
  }
}
