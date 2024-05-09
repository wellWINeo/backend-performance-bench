#!/bin/sh

docker run \
  --name dotnet-todo-db \
  -p 20003:5432 \
  -e POSTGRES_USER=nodejs \
  -e POSTGRES_PASSWORD=123 \
  -e POSTGRES_DB=tododb \
  -d postgres:latest
