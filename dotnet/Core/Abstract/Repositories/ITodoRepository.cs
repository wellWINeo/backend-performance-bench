using Todo.Core.Models;
using DataModels = Todo.Data.Models;

namespace Todo.Core.Abstract.Repositories;

public interface ITodoRepository
{
    Task<TodoEntity> Create(TodoEntity data);
    Task<TodoEntity?> Get(int id);
    Task<ICollection<TodoEntity>> GetAll();
    Task<TodoEntity> Update(TodoEntity data);
    Task Delete(int id);
}