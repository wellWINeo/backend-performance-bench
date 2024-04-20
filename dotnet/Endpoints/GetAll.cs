using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Todo.Core.Abstract.Services;
using Todo.Endpoints.Mappers;
using Todo.Endpoints.Models;

namespace Todo.Endpoints;

internal class GetAll
{
    public static async Task<Ok<ICollection<TodoDto>>>
        Execute([FromServices] ITodoService todoService)
    {
        var todos = await todoService.GetAll();

        return TypedResults.Ok(todos.ToDtos());
    }
}