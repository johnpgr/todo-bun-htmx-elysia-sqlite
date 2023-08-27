import { InferInsertModel, InferSelectModel } from "drizzle-orm"
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { nanoid } from "nanoid"

export const tasks = sqliteTable("tasks", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  title: text("title").notNull(),
  description: text("description"),
  completed: int("completed", { mode: "boolean" }).notNull().default(false),
  issuedAt: int("issued_at", { mode: "timestamp_ms" }).notNull().defaultNow(),
  dueDate: int("due_date", { mode: "timestamp_ms" }).notNull(),
})

export type Task = InferSelectModel<typeof tasks>
export type InsertTask = InferInsertModel<typeof tasks>
