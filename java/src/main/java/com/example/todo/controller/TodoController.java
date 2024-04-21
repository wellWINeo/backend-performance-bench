package com.example.todo.controller;

import com.example.todo.controller.dto.CreateTodoDto;
import com.example.todo.controller.dto.DtoMappers;
import com.example.todo.controller.dto.TodoDto;
import com.example.todo.core.TodoNotFoundException;
import com.example.todo.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos/")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    public ResponseEntity<TodoDto> create(@RequestBody CreateTodoDto dto) {
        var todo = DtoMappers.ToEntity(dto);

        try {
            todo = todoService.create(todo);
            return new ResponseEntity<>(DtoMappers.ToDto(todo), HttpStatus.CREATED);
        } catch (Throwable cause) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<TodoDto>> getAll() {
        var todos = todoService.getAll();

        return new ResponseEntity<>(DtoMappers.ToDtos(todos), HttpStatus.OK);
    }

    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable() int id) {

        try {
            todoService.setIsDone(id);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .build();
        } catch (TodoNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .build();
        }
    }
}
