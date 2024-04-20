namespace Todo.Endpoints.Models;

public readonly record struct TodoDto(
    int Id,
    DateTime UpdatedAt,
    DateTime DeadlineAt,
    string Title,
    string Description,
    bool IsDone
);