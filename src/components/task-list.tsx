import elements from "typed-html"
import { Task } from "@/models/tasks"

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul class="flex flex-col gap-4">
      {tasks.map((todo) => (
        <li>
          <div class="flex gap-4">
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.title}</span>
            <span>{todo.dueDate.toLocaleString()}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
