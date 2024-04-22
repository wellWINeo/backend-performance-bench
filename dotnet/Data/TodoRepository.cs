using Microsoft.EntityFrameworkCore;
using Todo.Core.Abstract.Repositories;
using Todo.Core.Models;
using Todo.Data.Mappers;

namespace Todo.Data;

internal class TodoRepository(TodoDbContext context) : ITodoRepository
{
    public async Task<TodoEntity> Create(TodoEntity entity)
    {
        var data = entity.ToData();

        await context.Set<Models.Todo>().AddAsync(data);
        await context.SaveChangesAsync();

        return data.ToEntity();
    }

    public async Task<TodoEntity?> Get(int id)
    {
        var data = await context.Set<Models.Todo>()
            .AsNoTracking()
            .Where(t => !t.IsDone)
            .Where(t => t.Id == id)
            .FirstOrDefaultAsync();

        return data?.ToEntity();
    }

    public async Task<ICollection<TodoEntity>> GetAll()
    {
        var data = await context.Set<Models.Todo>()
            .AsNoTracking()
            .Where(t => !t.IsDone)
            .ToArrayAsync();

        return data.ToEntities();
    }

    public async Task<TodoEntity> Update(TodoEntity entity)
    {
        var data = entity.ToData();

        context.Set<Models.Todo>().Update(data);
        await context.SaveChangesAsync();

        return data.ToEntity();
    }

    public async Task<bool> Delete(int id) => await context.Set<Models.Todo>()
        .Where(t => t.Id == id)
        .ExecuteDeleteAsync() != 0;
}