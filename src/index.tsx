import { Elysia } from "elysia"
import elements from "typed-html"
import { TodosController } from "./controllers/todos"
import { Context } from "./ctx"
import { Html } from "./html"
import { RequestLogger } from "./logger"
import { Root } from "./pages"

const app = new Elysia()
  .use(RequestLogger)
  .use(Html)
  .use(Context)
  .get("/styles.css", () => Bun.file("dist/styles.css"))
  .get("/", () => <Root />)
  .group("api", (group) => group.use(TodosController))
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
