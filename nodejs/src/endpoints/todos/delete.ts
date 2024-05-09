import { Request, Response } from "express";
import { ITodoService } from "../../core/abstract/services/todo-service";
import { TodoNotFoundError } from "../../core/errors/todo-not-found.error";

export const DeleteTodoEndpoint = (todoService: ITodoService) => {
  return async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      await todoService.delete(id);

      res.status(200).send();
    } catch (err) {
      if (err instanceof TodoNotFoundError) {
        res.status(404).send({ id: err.id, message: err.message });
      }
    }
  };
};
