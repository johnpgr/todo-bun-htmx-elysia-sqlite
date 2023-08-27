import { Elysia } from "elysia"
import elements from "typed-html"
import { TasksController } from "./routes/tasks"
import { Context } from "./ctx"
import { RequestLogger } from "./logger"
import html from "@elysiajs/html"
import { Layout } from "./components/layout"
import { Body } from "./components/body"

const app = new Elysia()
  .use(RequestLogger)
  .use(html())
  .use(Context)
  .use(TasksController)
  .get("/styles.css", () => Bun.file("dist/styles.css"))
  .get("/", ({ html }) => {
    return html(
      <Layout>
        <Body />
      </Layout>,
    )
  })
  .listen(3000)

export type App = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
