import { App } from "@/ctx"
import {
  MultipleTodoResponseDto,
  SingleTodoResponseDto
} from "@/dto/todos"
import { t } from "elysia"

export const TodosController = (app: App) =>
  app.group("/todos", (router) =>
    router
      .get(
        "/:id",
        async ({ ctx, params }) => ({
          todo: await ctx.todos.findById(params.id),
        }),
        {
          response: SingleTodoResponseDto,
        },
      )
      .get(
        "/all",
        async ({ ctx }) => {
          const todos = await ctx.todos.findAll()
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
        async ({ ctx, body }) => ({
          todo: await ctx.todos.create ({
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
        async ({ ctx, params, body }) => ({
          todo: await ctx.todos.update(params.id, {
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
