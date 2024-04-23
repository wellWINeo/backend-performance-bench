package domain

import "time"

type Todo struct {
	ID          uint
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeadlineAt  time.Time
	Title       string
	Description string
	IsDone      bool
}
