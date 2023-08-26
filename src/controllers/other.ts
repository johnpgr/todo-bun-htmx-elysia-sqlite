import type { Elysia } from "elysia"

export const otherController = (app: Elysia) =>
  app.group("/other", (router) =>
    router.get("/", async (ctx) => {
      return "Hello from Todos controller"
    }),
  )
