using Todo.Core.Models;

namespace Todo.Data.Mappers;

internal static class TodoMappings
{
    public static Data.Models.Todo ToData(this TodoEntity entity) => new()
    {
        Id = entity.Id,
        CreatedAt = entity.CreatedAt,
        UpdatedAt = entity.UpdatedAt,
        DeadlineAt = entity.DeadlineAt,
        Title = entity.Title,
        Description = entity.Description,
        IsDone = entity.IsDone
    };

    public static ICollection<Data.Models.Todo> ToDatas(this IEnumerable<TodoEntity> entities)
        => entities.Select(ToData).ToArray();
    
    public static TodoEntity ToEntity(this Data.Models.Todo data) => new()
    {
        Id = data.Id,
        CreatedAt = data.CreatedAt,
        UpdatedAt = data.UpdatedAt,
        DeadlineAt = data.DeadlineAt,
        Title = data.Title,
        Description = data.Description,
        IsDone = data.IsDone
    };

    public static ICollection<TodoEntity> ToEntities(this IEnumerable<Data.Models.Todo> entities)
        => entities.Select(ToEntity).ToArray();
}