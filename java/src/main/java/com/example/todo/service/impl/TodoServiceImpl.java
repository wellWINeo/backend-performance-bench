package com.example.todo.service.impl;

import com.example.todo.core.TodoEntity;
import com.example.todo.core.TodoNotFoundException;
import com.example.todo.repository.TodoRepository;
import com.example.todo.service.TodoService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public TodoEntity create(TodoEntity todo) {
        var data = TodoMappers.ToData(todo);

        data = todoRepository.save(data);

        var saved = todoRepository.getById(data.getId());
        if (saved.isEmpty()) {
            throw new TodoNotFoundException(data.getId());
        }

        return TodoMappers.ToEntity(data);
    }

    @Override
    public List<TodoEntity> getAll() {
        var todos = todoRepository.findAll();

        return TodoMappers.ToEntities(todos);
    }

    @Override
    public void setIsDone(int id) {
        var rowsAffected = todoRepository.updateTodoSetIsDoneTrue(id);

        if (rowsAffected == 0) {
            throw new TodoNotFoundException(id);
        }
    }
}
