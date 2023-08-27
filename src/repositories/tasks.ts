import { tasks, Task, InsertTask } from "../models/tasks"
import { IBaseRepository } from "./base"
import { DefaultDrizzleRepository } from "./base-drizzle"

export interface ITaskRepository extends IBaseRepository<Task, InsertTask> {}

export class TaskRepository extends DefaultDrizzleRepository<
  typeof tasks,
  Task,
  InsertTask
> {
  constructor() {
    super(tasks)
  }
}
