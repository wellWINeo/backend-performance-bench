import { Todo } from "../../todo";

export interface ITodoRepository {
  create(todo: Todo): Promise<Todo>;
  getAll(): Promise<Todo[]>;
  delete(id: number): Promise<boolean>;
}
