export const getConfig = () => {
  return {
    host: process.env["TODOAPP_DB_HOST"] ?? "localhost",
    port: +(process.env["TODOAPP_DB_PORT"] ?? 5432),
    username: process.env["TODOAPP_DB_USER"] ?? "nodejs",
    password: process.env["TODOAPP_DB_PASSWORD"] ?? "123",
    database: process.env["TODOAPP_DB_DATABASE"] ?? "tododb",
  };
};
