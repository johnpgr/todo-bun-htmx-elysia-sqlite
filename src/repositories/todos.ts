import { InsertTodo, Todo, todos } from "../models/todos"
import { IBaseRepository } from "./base"
import { DefaultDrizzleRepository } from "./base-drizzle"

export interface ITodoRepository extends IBaseRepository<Todo, InsertTodo> {}

export class TodoRepository extends DefaultDrizzleRepository<
  typeof todos,
  Todo,
  InsertTodo
> {
  constructor() {
    super(todos)
  }
}

export const todoRepository = new TodoRepository()
