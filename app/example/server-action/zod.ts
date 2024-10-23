import { z } from "zod"

export const RoleSchema = z.union([z.literal("admin"), z.literal("customer")])

export const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(5),
  role: RoleSchema,
})
