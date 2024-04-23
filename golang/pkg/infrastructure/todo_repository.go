package infrastructure

import (
	"golang/pkg/domain"
	"gorm.io/gorm"
)

type TodoRepository struct {
	db *gorm.DB
}

func NewTodoRepository(db *gorm.DB) *TodoRepository {
	return &TodoRepository{db: db}
}

func MigrateGorm(db *gorm.DB) error {
	return db.AutoMigrate(&todo{})
}

func (t *TodoRepository) CreateTodo(model *domain.Todo) (*domain.Todo, error) {
	data := todo{
		ID:          model.ID,
		DeadlineAt:  model.DeadlineAt,
		Title:       model.Title,
		Description: model.Description,
		IsDone:      model.IsDone,
	}

	result := t.db.Create(&data)
	if result.Error != nil {
		return nil, result.Error
	}

	return t.GetTodo(data.ID)
}

func (t *TodoRepository) GetTodo(id uint) (*domain.Todo, error) {
	data := &todo{}
	result := t.db.First(data, id)
	if result.Error != nil {
		return nil, result.Error
	}

	return &domain.Todo{
		ID:          data.ID,
		CreatedAt:   data.CreatedAt,
		UpdatedAt:   data.UpdatedAt,
		DeadlineAt:  data.DeadlineAt,
		Title:       data.Title,
		Description: data.Description,
		IsDone:      data.IsDone,
	}, nil
}

func (t *TodoRepository) GetAllTodos() ([]domain.Todo, error) {
	var records []todo
	result := t.db.
		Where("is_done = ?", false).
		Find(&records)
	if result.Error != nil {
		return nil, result.Error
	}

	todos := make([]domain.Todo, len(records))
	for i, record := range records {
		todos[i] = domain.Todo{
			ID:          record.ID,
			CreatedAt:   record.CreatedAt,
			UpdatedAt:   record.UpdatedAt,
			Title:       record.Title,
			Description: record.Description,
			IsDone:      record.IsDone,
		}
	}

	return todos, nil
}

func (t *TodoRepository) SetIsDone(id uint) (bool, error) {
	result := t.db.
		Model(&todo{}).
		Where("id = ?", id).
		Update("is_done", true)

	return result.RowsAffected > 0, result.Error
}
