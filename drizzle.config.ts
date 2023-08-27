import { Config } from "drizzle-kit"

export default {
  dbCredentials: {
    url: "file:/db.sqlite",
  },
  driver: "libsql",
  out: "drizzle",
  schema: "src/db/schema.ts",
} satisfies Config
