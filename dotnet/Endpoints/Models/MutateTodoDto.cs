namespace Todo.Endpoints.Models;

public readonly record struct MutateTodoDto(
    string Title,
    string Description,
    DateTime DeadlineAt
);