using Todo.Core.Models;
using Todo.Endpoints.Models;

namespace Todo.Endpoints.Mappers;

internal static class TodoDtoMappers
{
    public static TodoDto ToDto(this TodoEntity entity) => new(
        Id: entity.Id,
        UpdatedAt: entity.UpdatedAt,
        DeadlineAt: entity.DeadlineAt,
        Title: entity.Title,
        Description: entity.Description,
        IsDone: entity.IsDone
    );

    public static ICollection<TodoDto> ToDtos(this IEnumerable<TodoEntity> entities)
        => entities.Select(ToDto).ToArray();
}