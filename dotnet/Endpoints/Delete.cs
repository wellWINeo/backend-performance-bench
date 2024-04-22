using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Todo.Core.Abstract.Services;
using Todo.Core.Exceptions;

namespace Todo.Endpoints;

internal class Delete
{
    public static async Task<Results<Ok, NotFound>> Execute(
        [FromRoute] int id,
        [FromServices] ITodoService todoService)
    {
        try
        {
            await todoService.SetDone(id);
            return TypedResults.Ok();
        }
        catch (TodoNotFoundException)
        {
            return TypedResults.NotFound();
        }
    }
}