package com.example.todo.controller.dto;

import lombok.Getter;

import java.util.Date;

public record TodoDto(
    int id,
    Date updateAt,
    Date deadlineAt,
    String title,
    String description,
    boolean isDone
) { }
