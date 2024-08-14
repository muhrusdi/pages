import { InferInsertModel, sql } from "drizzle-orm"
import { text, integer } from "drizzle-orm/sqlite-core"
import { sqliteTable } from "drizzle-orm/sqlite-core"

export const user = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
})

export type UserType = InferInsertModel<typeof user>
