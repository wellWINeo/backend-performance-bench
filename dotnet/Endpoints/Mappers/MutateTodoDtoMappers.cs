using Todo.Core.Models;
using Todo.Endpoints.Models;

namespace Todo.Endpoints.Mappers;

internal static class MutateTodoDtoMappers
{
    public static TodoEntity ToEntity(this MutateTodoDto dto) => new()
    {
        DeadlineAt = dto.DeadlineAt,
        Title = dto.Title,
        Description = dto.Description,
    };
}