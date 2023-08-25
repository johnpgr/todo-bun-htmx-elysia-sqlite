import elements from "typed-html"
import { Elysia } from "elysia"
import { html } from "@elysiajs/html"
import { Layout } from "./components/layout"

const app = new Elysia()
  .use(html())
  .get("/styles.css", () => Bun.file("dist/styles.css"))
  .get("/", ({ html }) =>
    html(
      <Layout>
        <body>
          <h1 class="text-red-500 font-bold text-3xl">Hello, world!</h1>
        </body>
      </Layout>,
    ),
  )
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
