import { FieldError, FieldErrors } from "react-hook-form"
import { z } from "zod"

export const RoleSchema = z.union([z.literal("admin"), z.literal("customer")])

export const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(5),
  role: RoleSchema,
  id: z.string().nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
})

export type ActionState = {
  error?: FieldErrors
  data?: z.infer<typeof schema>
}
