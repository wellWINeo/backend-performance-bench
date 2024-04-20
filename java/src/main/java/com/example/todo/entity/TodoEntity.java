package com.example.todo.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TodoEntity {
    private int id;

    private Date createdAt;

    private Date updatedAt;

    private Date deadlineAt;

    private String title;

    private String description;

    private boolean isDone;
}
