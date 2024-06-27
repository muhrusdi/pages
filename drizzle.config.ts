import "./drizzle/envConfig"
import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./drizzle/schema/*",
  out: "./drizzle/migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN
  }
});
