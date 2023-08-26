import { InferInsertModel, InferSelectModel } from "drizzle-orm"
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { nanoid } from "nanoid"

export const todos = sqliteTable("todos", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  title: text("title").notNull(),
  completed: int("completed", { mode: "boolean" }).notNull().default(false),
  issuedAt: int("issued_at", { mode: "timestamp_ms" }).notNull().defaultNow(),
  dueDate: int("due_date", { mode: "timestamp_ms" }).notNull(),
})

export type Todo = InferSelectModel<typeof todos>
export type InsertTodo = InferInsertModel<typeof todos>
