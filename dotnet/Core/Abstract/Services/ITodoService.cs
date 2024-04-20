using Todo.Core.Models;

namespace Todo.Core.Abstract.Services;

public interface ITodoService
{
    Task<TodoEntity> Create(TodoEntity entity);
    Task<ICollection<TodoEntity>> GetAll();
    Task SetDone(int id);
}