package errors

import "fmt"

type TodoNotFoundError struct {
	ID uint
}

func (e *TodoNotFoundError) Error() string {
	return fmt.Sprintf("Todo with id %d not found", e.ID)
}

func NewTodoNotFoundError(id uint) error {
	return &TodoNotFoundError{ID: id}
}
