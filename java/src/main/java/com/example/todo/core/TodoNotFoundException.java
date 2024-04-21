
package com.example.todo.core;

public class TodoNotFoundException extends RuntimeException {
    public TodoNotFoundException(int id) {
        super(String.format("Todo with id %s not found", id));
    }
}
