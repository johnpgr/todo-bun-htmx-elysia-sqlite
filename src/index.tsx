import { Elysia } from "elysia"
import { html } from "@elysiajs/html"
import { Root } from "./pages"
import elements from "typed-html"
import { todosController } from "./controllers/todos"
import { otherController } from "./controllers/other"

const app = new Elysia()
  .use(html())
  .get("/styles.css", () => Bun.file("dist/styles.css"))
  .get("/", () => <Root />)
  .group("api", (group) => group.use(todosController).use(otherController)) // This line breaks the `app` type entirely and I don't know why
  .listen(3000) as unknown as ReturnType<typeof html> // The manual type cast here is required

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)

export type ElysiaApp = typeof app
