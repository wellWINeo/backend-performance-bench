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

app.MapPost("/api/todos", Create.Execute);
app.MapGet("/api/todos", GetAll.Execute);
app.MapDelete("/api/todos/{id:int}", Delete.Execute);

app.Run();