using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Todo.Core.Abstract.Services;

namespace Todo.Endpoints;

internal class Delete
{
    public static async Task<Ok> Execute(
        [FromRoute] int id,
        [FromServices] ITodoService todoService)
    {
        await todoService.SetDone(id);

        return TypedResults.Ok();
    }
}