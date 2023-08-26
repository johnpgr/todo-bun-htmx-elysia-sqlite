import { todoRepository } from "@/repositories/todos"
import { TodoService } from "./todos"
import type { Elysia } from "elysia"

export const setupServices = (app: Elysia) =>
  app.decorate("services", {
    todos: new TodoService(todoRepository),
  })

export type App = ReturnType<typeof setupServices>
