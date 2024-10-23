"use server"

import { insertUser } from "@/drizzle/db"
import { schema, RoleSchema } from "./zod"
import { z } from "zod"

export const createUser = async (prevData: any, formData: FormData) => {
  const validatedFields = schema.safeParse(Object.fromEntries(formData))

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.formErrors.fieldErrors,
    }
  }

  insertUser({
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    password: formData.get("password") as string,
    role: formData.get("role") as z.infer<typeof RoleSchema>,
  })
}
