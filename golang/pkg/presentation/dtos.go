package presentation

import (
	"golang/pkg/domain"
	"time"
)

// DTO

type TodoDTO struct {
	ID          uint      `json:"id"`
	UpdatedAt   time.Time `json:"updatedAt"`
	DeadlineAt  time.Time `json:"deadlineAt"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	IsDone      bool      `json:"isDone"`
}

type CreateTodoDTO struct {
	Title       string    `json:"title"`
	Description string    `json:"description"`
	DeadlineAt  time.Time `json:"deadlineAt"`
}

// Mappers

func toTodoDTO(todo domain.Todo) TodoDTO {
	return TodoDTO{
		ID:          todo.ID,
		UpdatedAt:   todo.UpdatedAt,
		DeadlineAt:  todo.DeadlineAt,
		Title:       todo.Title,
		Description: todo.Description,
		IsDone:      todo.IsDone,
	}
}

func toTodoDTOs(todos []domain.Todo) []TodoDTO {
	dtos := make([]TodoDTO, len(todos))

	for i, todo := range todos {
		dtos[i] = toTodoDTO(todo)
	}

	return dtos
}

func fromCreateTodoDTO(dto *CreateTodoDTO) *domain.Todo {
	return &domain.Todo{
		ID:          0,
		DeadlineAt:  dto.DeadlineAt,
		Title:       dto.Title,
		Description: dto.Description,
		IsDone:      false,
	}
}
