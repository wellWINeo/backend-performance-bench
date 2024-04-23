#!/bin/sh

docker run \
  --name golang-todo-db \
  -p 20002:5432 \
  -e POSTGRES_USER=golang \
  -e POSTGRES_PASSWORD=123 \
  -e POSTGRES_DB=tododb \
  -d postgres:latest
  
