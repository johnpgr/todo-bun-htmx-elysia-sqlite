import { Config } from "drizzle-kit"

export default {
  dbCredentials: {
    url: "sqlite://db.sqlite",
  },
  driver: "libsql",
  out: "drizzle",
  schema: "src/db/schema.ts",
} satisfies Config
