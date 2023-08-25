import { drizzle } from "drizzle-orm/bun-sqlite"
import { migrate } from "drizzle-orm/bun-sqlite/migrator"
import { Database } from "bun:sqlite"
import * as schema from "./schema"

const sqlite = new Database("db.sqlite")

const db = drizzle(sqlite, {
  schema,
})

migrate(db, {
  migrationsFolder: "drizzle",
})

export { db, schema }
