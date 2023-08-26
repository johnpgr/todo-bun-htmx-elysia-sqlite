import Elysia from "elysia"
import { TodoRepository } from "./repositories/todos"
import { db } from "./db"

export const Context = (app: Elysia) =>
  app
    .decorate("ctx", {
      db,
      todos: new TodoRepository(),
    })

export type App = ReturnType<typeof Context>
