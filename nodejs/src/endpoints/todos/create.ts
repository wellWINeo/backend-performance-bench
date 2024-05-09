import { ITodoService } from "../../core/abstract/services/todo-service";
import { Request, Response } from "express";
import { ToTodo } from "../mappers/create-todo-dto.mappers";
import { ToTodoDto } from "../mappers/todo-dto.mappers";

export const CreateTodoEndpoint = (todoService: ITodoService) => {
  return async (req: Request, res: Response) => {
    let todo = ToTodo(req.body);

    todo = await todoService.create(todo);

    res.status(200).json(ToTodoDto(todo));
  };
};
