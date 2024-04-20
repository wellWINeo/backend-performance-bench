using Microsoft.EntityFrameworkCore;

namespace Todo.Data;

public class TodoDbContext(DbContextOptions<TodoDbContext> options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Models.Todo>(entityBuilder =>
        {
            entityBuilder.HasKey(t => t.Id);

            entityBuilder
                .Property(t => t.CreatedAt)
                .ValueGeneratedOnAdd()
                .HasDefaultValueSql("now()");

            entityBuilder
                .Property(t => t.UpdatedAt)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("now()");

            entityBuilder
                .Property(t => t.IsDone)
                .HasDefaultValue(false);
        });
    }
}