import { DataSource } from "typeorm";
import { TodoData } from "./todo-data";
import { Init1715255816208 } from "./migrations/1715255816208-init";

export const GetTodoDataSource = (config: {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}) =>
  new DataSource({
    type: "postgres",
    ...config,
    synchronize: true,
    logging: true,
    entities: [TodoData],
    subscribers: [],
    migrations: [Init1715255816208],
  });
