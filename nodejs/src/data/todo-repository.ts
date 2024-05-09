import { Repository } from "typeorm";
import { ITodoRepository } from "../core/abstract/repositories/todo-repository";
import { Todo } from "../core/todo";

export class TodoRepository implements ITodoRepository {
  constructor(private readonly repository: Repository<Todo>) {}

  async create(todo: Todo): Promise<Todo> {
    const saved = await this.repository.save([todo]);

    if (saved.length != 1)
      throw new Error("Unexpected error during saving todo");

    return saved[0];
  }

  getAll(): Promise<Todo[]> {
    return this.repository.find({ where: { isDone: false } });
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.update({ id }, { isDone: true });

    return result.affected == 1;
  }
}
