using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Todo.Core.Abstract.Services;
using Todo.Endpoints.Mappers;
using Todo.Endpoints.Models;

namespace Todo.Endpoints;

internal class Create
{
    public static async Task<Ok<TodoDto>> Execute(
        [FromBody] MutateTodoDto dto,
        [FromServices] ITodoService todoService
    )
    {
        var saved = await todoService.Create(dto.ToEntity());

        return TypedResults.Ok(saved.ToDto());
    }
}