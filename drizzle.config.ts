import "./drizzle/envConfig"
import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./drizzle/schema/*",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: "libsql://demo-muhrusdi.turso.io",
    authToken: process.env.TURSO_TOKEN
  }
});
