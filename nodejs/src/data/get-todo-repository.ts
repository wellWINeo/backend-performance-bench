import { DataSource } from "typeorm";
import { ITodoRepository } from "../core/abstract/repositories/todo-repository";
import { TodoData } from "./todo-data";
import { TodoRepository } from "./todo-repository";

export const getTodoRepository = (dataSource: DataSource): ITodoRepository => {
  const repository = dataSource.getRepository(TodoData);

  return new TodoRepository(repository);
};
