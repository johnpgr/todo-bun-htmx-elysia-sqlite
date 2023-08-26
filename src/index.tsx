import { html } from "@elysiajs/html"
import { Elysia } from "elysia"
import elements from "typed-html"
import { otherController } from "./controllers/other"
import { todosController } from "./controllers/todos"
import { Root } from "./pages"
import { setupServices } from "./services/setup"

const app = new Elysia()
  .use(html())
  .use(setupServices)
  .get("/styles.css", () => Bun.file("dist/styles.css"))
  .get("/", () => <Root />)
  .group("api", (group) => group.use(todosController).use(otherController))
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
