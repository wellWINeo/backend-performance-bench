package application

import (
	"golang/pkg/domain"
	"golang/pkg/domain/abstract"
	"golang/pkg/domain/errors"
)

type TodoService struct {
	todoRepository *abstract.TodoRepository
}

func NewTodoService(todoRepository *abstract.TodoRepository) *TodoService {
	return &TodoService{todoRepository: todoRepository}
}

func (t *TodoService) Create(todo *domain.Todo) (*domain.Todo, error) {
	return (*t.todoRepository).CreateTodo(todo)
}

func (t *TodoService) GetAll() ([]domain.Todo, error) {
	return (*t.todoRepository).GetAllTodos()
}

func (t *TodoService) SetIsDone(id uint) error {
	isModified, err := (*t.todoRepository).SetIsDone(id)
	if err != nil {
		return err
	}

	if isModified {
		return nil
	}

	return errors.NewTodoNotFoundError(id)
}
