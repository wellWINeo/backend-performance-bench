import { ITodoRepository } from "../core/abstract/repositories/todo-repository";
import { ITodoService } from "../core/abstract/services/todo-service";
import { TodoService } from "./todo-service";

export const getTodoService = (todoRepository: ITodoRepository): ITodoService =>
  new TodoService(todoRepository);
