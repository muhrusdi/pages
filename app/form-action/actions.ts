import { wait } from "@/utils"
import z from "zod"

export const ResSchema = z.object({
  message: z.string(),
  errors: z.union([z.string().array(), z.string()]).optional(),
})

export const schema = z.object({
  email: z.string().email().min(1).default(""),
  name: z.string().default(""),
  date: z.string().default(""),
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
