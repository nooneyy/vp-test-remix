import { defineConfig } from "drizzle-kit";

console.log(process.env.TURSO_URL);

export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_URL!,
    authToken: process.env.TURSO_KEY,
  },
  schema: "./app/lib/db/schema.ts",
});
