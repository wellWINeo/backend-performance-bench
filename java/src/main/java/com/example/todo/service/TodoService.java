package com.example.todo.service;

import com.example.todo.entity.TodoEntity;

import java.util.List;

public interface TodoService {
    TodoEntity create(TodoEntity todo);
    List<TodoEntity> getAll();
    void setIsDone(int id);
}
