package com.example.todo.service;

import com.example.todo.core.TodoEntity;
import com.example.todo.core.TodoNotFoundException;

import java.util.List;

public interface TodoService {
    TodoEntity create(TodoEntity todo);
    List<TodoEntity> getAll();
    void setIsDone(int id);
}
