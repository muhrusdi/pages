import { wait } from "@/utils"
import z from "zod"

export const ResSchema = z.object({
  message: z.string().nullable(),
})

const schema = z.object({
  email: z.string(),
  name: z.string(),
  date: z.string(),
})

export type FormType = z.infer<typeof schema>

export const actionForm = async (prev: any, formData: FormData) => {
  const errors: Record<string, string> = {}

  const parsed = schema.safeParse(Object.fromEntries(formData.entries()))

  if (!parsed.success) {
    return {
      errors: parsed.error.issues,
      message: "Failur",
    }
  }

  await wait(3000)
  console.log(parsed)

  return {
    message: "Success",
  }
}
