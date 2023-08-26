import { t } from "elysia"

export const TodoDto = t.Object({
  id: t.String(),
  title: t.String(),
  completed: t.Boolean(),
  dueDate: t.Date(),
  issuedAt: t.Date(),
})

export const MultipleTodoResponseDto = t.Object({
  todos: t.Array(TodoDto),
  todoCount: t.Number(),
})

export const SingleTodoResponseDto = t.Object({
  todo: t.Union([TodoDto, t.Null()]),
})
