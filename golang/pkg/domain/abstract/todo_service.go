package abstract

import "golang/pkg/domain"

type TodoService interface {
	Create(*domain.Todo) (*domain.Todo, error)
	GetAll() ([]domain.Todo, error)
	SetIsDone(uint) error
}
