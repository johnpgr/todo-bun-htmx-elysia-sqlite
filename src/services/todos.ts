import { InsertTodo, Todo } from "@/models/todos"
import { TodoRepository } from "@/repositories/todos"

export class TodoService {
  constructor(private readonly todosRepository: TodoRepository) {}

  async findById(id: string) {
    return this.todosRepository.findById(id)
  }

  async findAll() {
    return this.todosRepository.findAll()
  }

  async create(todo: InsertTodo) {
    return this.todosRepository.create(todo)
  }

  async update(id: string, todo: InsertTodo) {
    return this.todosRepository.update(id, todo)
  }

  async delete(id: string) {
    return this.todosRepository.delete(id)
  }
}
