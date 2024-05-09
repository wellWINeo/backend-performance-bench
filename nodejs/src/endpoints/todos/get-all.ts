import { ITodoService } from "../../core/abstract/services/todo-service";
import { Request, Response } from "express";

export const GetAllTodosEndpoint = (todoService: ITodoService) => {
  return async (req: Request, res: Response) => {
    const todos = await todoService.getAll();

    res.json(todos);
  };
};
