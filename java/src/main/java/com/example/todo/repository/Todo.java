package com.example.todo.repository;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "todos")
@Getter
@Setter
@AllArgsConstructor()
public class Todo {
    @Id
    @GeneratedValue
    private int id;

    private Date createdAt;

    private Date updatedAt;

    private Date deadlineAt;

    private String title;

    private String description;

    private boolean isDone;

    protected Todo() { }
}
