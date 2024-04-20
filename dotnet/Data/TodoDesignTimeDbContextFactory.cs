using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Todo.Data;

public class TodoDesignTimeDbContextFactory : IDesignTimeDbContextFactory<TodoDbContext>
{
    public TodoDbContext CreateDbContext(string[] args)
    {
        var connectionString = GetConnectionString();

        var options = new DbContextOptionsBuilder<TodoDbContext>()
            .UseNpgsql(connectionString)
            .Options;

        return new TodoDbContext(options);
    }

    private string GetConnectionString()
    {
        var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .AddJsonFile("appsettings.Development.json")
            .Build();

        var connectionString = configuration.GetConnectionString("Database");
        ArgumentException.ThrowIfNullOrWhiteSpace(connectionString);

        return connectionString;
    }
}