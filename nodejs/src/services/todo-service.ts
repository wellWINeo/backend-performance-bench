import { ITodoRepository } from "../core/abstract/repositories/todo-repository";
import { ITodoService } from "../core/abstract/services/todo-service";
import { TodoNotFoundError } from "../core/errors/todo-not-found.error";
import { Todo } from "../core/todo";

export class TodoService implements ITodoService {
  constructor(private readonly todoRepository: ITodoRepository) {}

  create(todo: Todo): Promise<Todo> {
    return this.todoRepository.create(todo);
  }

  getAll(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }

  setIsDone(id: number): Promise<void> {
    throw new Error("");
  }

  async delete(id: number): Promise<void> {
    const isDeleted = await this.todoRepository.delete(id);

    if (!isDeleted) {
      throw new TodoNotFoundError(id);
    }
  }
}
