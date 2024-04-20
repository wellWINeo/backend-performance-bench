package com.example.todo.service.impl;

import com.example.todo.entity.TodoEntity;
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
        data = todoRepository.getById(data.getId()).orElseThrow();

        return TodoMappers.ToEntity(data);
    }

    @Override
    public List<TodoEntity> getAll() {
        var todos = todoRepository.findAll();

        return TodoMappers.ToEntities(todos);
    }

    @Override
    public void setIsDone(int id) {
        todoRepository.updateTodoSetIsDoneTrue(id);
    }
}
