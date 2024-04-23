package infrastructure

import "time"

type todo struct {
	ID          uint
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeadlineAt  time.Time
	Title       string
	Description string
	IsDone      bool
}
