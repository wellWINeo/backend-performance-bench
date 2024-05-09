import { Todo } from "../../core/todo";
import { TodoDto } from "../models/todo.dto";

export const ToTodoDto = (todo: Todo) =>
  <TodoDto>{
    id: todo.id,
    updatedAt: todo.updatedAt,
    deadlineAt: todo.deadlineAt,
    title: todo.title,
    description: todo.description,
    isDone: todo.isDone,
  };

export const ToTodoDtoList = (todos: Todo[]): TodoDto[] => todos.map(ToTodoDto);
