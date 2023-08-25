import { TodoRepository } from "@/repositories/todos"
import { ElysiaApp } from ".."

export const todosController = (app: ElysiaApp) =>
  app.group("/todos", (router) =>
    router.get("/all", async (ctx) => {
      const todosRepository = new TodoRepository()
      return todosRepository.findAll()
    }),
  )
