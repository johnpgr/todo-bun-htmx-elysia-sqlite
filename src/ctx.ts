import Elysia from "elysia"
import { TaskRepository } from "./repositories/tasks"
import { db } from "./db"

export const Context = (app: Elysia) =>
  app.decorate("ctx", {
    db,
    tasks: new TaskRepository(),
  })

export type AppContext = ReturnType<typeof Context>
