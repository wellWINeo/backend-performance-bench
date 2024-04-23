package abstract

import "golang/pkg/domain"

type TodoRepository interface {
	CreateTodo(*domain.Todo) (*domain.Todo, error)
	GetTodo(uint) (*domain.Todo, error)
	GetAllTodos() ([]domain.Todo, error)
	SetIsDone(uint) (bool, error)
}
