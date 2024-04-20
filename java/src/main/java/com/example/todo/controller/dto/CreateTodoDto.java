package com.example.todo.controller.dto;

import java.util.Date;

public record CreateTodoDto(
        String title,
        String description,
        Date deadlineAt
) { }