package com.example.todo.controller.dto;

import com.example.todo.entity.TodoEntity;

import java.util.List;

public class DtoMappers {
    public static TodoDto ToDto(TodoEntity todo) {
        return new TodoDto(
                todo.getId(),
                todo.getCreatedAt(),
                todo.getDeadlineAt(),
                todo.getTitle(),
                todo.getDescription(),
                todo.isDone()
        );
    }

    public static List<TodoDto> ToDtos(List<TodoEntity> todos) {
        return todos
                .stream()
                .map(DtoMappers::ToDto)
                .toList();
    }

    public static TodoEntity ToEntity(CreateTodoDto dto) {
        var todo = new TodoEntity();

        todo.setTitle(dto.title());
        todo.setDescription(dto.description());
        todo.setDeadlineAt(dto.deadlineAt());

        return todo;
    }
}
