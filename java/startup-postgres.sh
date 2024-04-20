#!/bin/sh

docker run \
  --name java-todo-db \
  -p 20001:5432 \
  -e POSTGRES_USER=java \
  -e POSTGRES_PASSWORD=123 \
  -e POSTGRES_DB=tododb \
  -d postgres:latest
