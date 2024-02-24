import { wait } from "@/utils"
import z from "zod"

export const ResSchema = z.object({
  message: z.string(),
  errors: z.record(z.string()).optional(),
})

export const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email :)"),
  name: z.string(),
  date: z.string(),
})

export type FormType = z.infer<typeof schema>

export const actionForm = async (prev: any, formData: FormData) => {
  // console.log(schema.parse(undefined))
  const parsed = schema.safeParse(Object.fromEntries(formData.entries()))

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Failur",
    }
  }

  await wait(3000)
  console.log(parsed)

  return {
    message: "Success",
    errors: null,
  } as any
}
