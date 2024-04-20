package com.example.todo.controller;

import com.example.todo.controller.dto.CreateTodoDto;
import com.example.todo.controller.dto.DtoMappers;
import com.example.todo.controller.dto.TodoDto;
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
    public ResponseEntity<TodoDto> Create(@RequestBody CreateTodoDto dto) {
        var todo = DtoMappers.ToEntity(dto);

        todo = todoService.create(todo);

        return new ResponseEntity<>(DtoMappers.ToDto(todo), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TodoDto>> GetAll() {
        var todos = todoService.getAll();

        return new ResponseEntity<>(DtoMappers.ToDtos(todos), HttpStatus.OK);
    }

    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> Delete(@PathVariable() int id) {
        todoService.setIsDone(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
