docker run `
  --name dotnet-todo-db `
  -p 20000:5432 `
  -e POSTGRES_USER=dotnet `
  -e POSTGRES_PASSWORD=123 `
  -e POSTGRES_DB=tododb `
  -d postgres:latest
  