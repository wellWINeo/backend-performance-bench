package com.example.todo.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends Repository<Todo, Integer> {
    Optional<Todo> getById(int id);
    Todo save(Todo todo);

    @Query("SELECT t FROM Todo t WHERE t.isDone = FALSE")
    List<Todo> findAll();

    @Modifying
    @Transactional
    @Query("UPDATE Todo t SET t.isDone = true, t.updatedAt = CAST(NOW() AS TIMESTAMP) WHERE t.id = :todoId AND t.isDone = FALSE")
    int updateTodoSetIsDoneTrue(@Param("todoId") int id);
}

