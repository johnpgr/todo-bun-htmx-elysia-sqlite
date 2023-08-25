import { ElysiaApp } from ".."

export const otherController = (app: ElysiaApp) =>
  app.group("/other", (router) =>
    router.get("/", async (ctx) => {
      return "Hello from Todos controller"
    }),
  )
