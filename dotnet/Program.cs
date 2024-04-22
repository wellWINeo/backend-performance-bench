using Microsoft.EntityFrameworkCore;
using Todo.Core.Abstract.Repositories;
using Todo.Core.Abstract.Services;
using Todo.Data;
using Todo.Endpoints;
using Todo.Services;

var builder = WebApplication.CreateBuilder(args);

// EF Core
builder.Services.AddDbContext<TodoDbContext>(options => options
    .UseNpgsql(builder.Configuration.GetConnectionString("Database"))
);

// DAL
builder.Services.AddScoped<ITodoRepository, TodoRepository>();


// Service
builder.Services.AddScoped<ITodoService, TodoService>();

var app = builder.Build();

var routeBuilder = app.MapGroup("/api/todos/");
routeBuilder.MapPost("/", Create.Execute);
routeBuilder.MapGet("/", GetAll.Execute);
routeBuilder.MapDelete("{id:int}", Delete.Execute);

// applying migrations
using var scope = app.Services.CreateScope();
var dbContext = scope.ServiceProvider.GetRequiredService<TodoDbContext>();

await dbContext.Database.MigrateAsync();

await app.RunAsync();