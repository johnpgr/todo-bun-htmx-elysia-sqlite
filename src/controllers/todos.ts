import {
  MultipleTodoResponseDto,
  SingleTodoResponseDto,
  TodoDto,
} from "@/dto/todos"
import { App } from "@/services/setup"
import { t } from "elysia"

export const todosController = (app: App) =>
  app.group("/todos", (router) =>
    router
      .get(
        "/:id",
        async ({ services, params }) => ({
          todo: await services.todos.findById(params.id),
        }),
        {
          response: SingleTodoResponseDto,
        },
      )
      .get(
        "/all",
        async ({ services }) => {
          const todos = await services.todos.findAll()
          return {
            todos,
            todoCount: todos.length,
          }
        },
        {
          response: MultipleTodoResponseDto,
        },
      )
      .post(
        "/",
        async ({ services, body }) => ({
          todo: await services.todos.create({
            ...body,
            dueDate: new Date(body.dueDate),
          }),
        }),
        {
          body: t.Object({
            title: t.String(),
            dueDate: t.String({
              format: "date-time",
              error: "Invalid dueDate, must be a valid ISO 8601 date string",
            }),
          }),
          response: SingleTodoResponseDto,
        },
      )
      .put(
        "/:id",
        async ({ services, params, body }) => ({
          todo: await services.todos.update(params.id, {
            ...body,
            dueDate: new Date(body.dueDate),
          }),
        }),
        {
          body: t.Object({
            title: t.String(),
            completed: t.Boolean(),
            dueDate: t.String({
              format: "date-time",
              error: "Invalid dueDate, must be a valid ISO 8601 date string",
            }),
          }),
          response: SingleTodoResponseDto,
        },
      ),
  )
