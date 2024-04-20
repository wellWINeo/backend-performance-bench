using Todo.Core.Abstract.Repositories;
using Todo.Core.Abstract.Services;
using Todo.Core.Models;

namespace Todo.Services;

public class TodoService(ITodoRepository todoRepository) : ITodoService
{
    public Task<TodoEntity> Create(TodoEntity entity)
        => todoRepository.Create(entity);

    public Task<ICollection<TodoEntity>> GetAll()
        => todoRepository.GetAll();


    public async Task SetDone(int id)
    {
        var todo = await todoRepository.Get(id) 
            ?? throw new Exception("Todo not found");

        todo.IsDone = true;

        await todoRepository.Update(todo);
    }
}