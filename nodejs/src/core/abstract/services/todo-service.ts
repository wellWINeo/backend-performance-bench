import { Todo } from "../../todo";

export interface ITodoService {
    create(todo: Todo): Promise<Todo>;
    getAll(): Promise<Todo[]>;
    setIsDone(id: number): Promise<void>;
    delete(id: number): Promise<void>;
}