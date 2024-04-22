namespace Todo.Core.Exceptions;

public class TodoNotFoundException(int id) 
    : Exception($"Todo with id {id} not found");