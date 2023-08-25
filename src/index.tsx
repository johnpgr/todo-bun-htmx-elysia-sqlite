import { Elysia } from "elysia"
import { html } from "@elysiajs/html"
import { Root } from "./pages"
import elements from "typed-html"

const app = new Elysia()
  .use(html())
  .get("/styles.css", () => Bun.file("dist/styles.css"))
  .get("/", () => <Root />)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)

export type ElysiaApp = typeof app
