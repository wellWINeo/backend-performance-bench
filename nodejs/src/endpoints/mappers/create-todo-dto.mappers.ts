import { Todo } from "../../core/todo";
import { CreateTodoDto } from "../models/create-todo.dto";

export const ToTodo = (dto: CreateTodoDto) =>
  <Todo>{
    title: dto.title,
    description: dto.description,
    deadlineAt: dto.deadlineAt,
  };
