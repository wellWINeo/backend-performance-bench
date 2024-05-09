import dotenv from "dotenv";
import express from "express";
import { getTodoService } from "./services/get-todo-service";
import { GetAllTodosEndpoint } from "./endpoints/todos/get-all";
import { CreateTodoEndpoint } from "./endpoints/todos/create";
import { DeleteTodoEndpoint } from "./endpoints/todos/delete";
import { getConfig } from "./helpers";
import { GetTodoDataSource as getTodoDataSource } from "./data/data-source";
import { getTodoRepository } from "./data/get-todo-repository";

dotenv.config();

const config = getConfig();
const dataSource = getTodoDataSource(config);

await dataSource.initialize();

const todoRepository = getTodoRepository(dataSource);
const todoService = getTodoService(todoRepository);

const app = express();

app.use(express.json());

app.get("/api/todos/", GetAllTodosEndpoint(todoService));
app.post("/api/todos/", CreateTodoEndpoint(todoService));
app.delete("/api/todos/:id", DeleteTodoEndpoint(todoService));

app.listen(8080, () => console.log("listening on port 8080"));
