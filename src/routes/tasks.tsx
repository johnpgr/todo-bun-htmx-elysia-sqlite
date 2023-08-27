import elements from "typed-html"
import { AppContext } from "@/ctx"
import { TaskList } from "@/components/task-list"

export const TasksController = (app: AppContext) =>
  app.group("/tasks", (router) =>
    router.get("/", async ({ ctx }) => {
      const tasks = await ctx.tasks.findAll()
      return <TaskList tasks={tasks} />
    }),
  )
