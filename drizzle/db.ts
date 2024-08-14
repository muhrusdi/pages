import "@/drizzle/envConfig"
import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client"
import { UserType, user } from "./schema"
import * as schema from "./schema"

const client = createClient({
  url: process.env.TURSO_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export const db = drizzle(client, { schema })

export const getUsers = () => db.query.user.findMany()

export const insertUser = async (_user: UserType) => {
  return db.insert(user).values(_user).returning()
}
