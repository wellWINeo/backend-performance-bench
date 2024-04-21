package com.example.todo.service.impl;

import com.example.todo.core.TodoEntity;
import com.example.todo.repository.Todo;

import java.util.List;

class TodoMappers {
    public static Todo ToData(TodoEntity todo) {
        return new Todo(
                todo.getId(),
                todo.getCreatedAt(),
                todo.getUpdatedAt(),
                todo.getDeadlineAt(),
                todo.getTitle(),
                todo.getDescription(),
                todo.isDone()
        );
    }

    public static TodoEntity ToEntity(Todo todo) {
        return new TodoEntity(
                todo.getId(),
                todo.getCreatedAt(),
                todo.getUpdatedAt(),
                todo.getDeadlineAt(),
                todo.getTitle(),
                todo.getDescription(),
                todo.isDone()
        );
    }

    public static List<TodoEntity> ToEntities(List<Todo> todos) {
        return todos
                .stream()
                .map(TodoMappers::ToEntity)
                .toList();
    }
}
