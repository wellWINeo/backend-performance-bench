package presentation

import (
	"errors"
	"github.com/labstack/echo/v4"
	"golang/pkg/domain/abstract"
	domainErrors "golang/pkg/domain/errors"
	"net/http"
	"strconv"
)

type TodoController struct {
	todoService *abstract.TodoService
}

func NewTodoController(todoService *abstract.TodoService) *TodoController {
	return &TodoController{
		todoService: todoService,
	}
}

func (t *TodoController) Create(c echo.Context) error {
	dto := new(CreateTodoDTO)
	if err := c.Bind(dto); err != nil {
		return err
	}

	todo := fromCreateTodoDTO(dto)
	todo, err := (*t.todoService).Create(todo)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, toTodoDTO(*todo))
}

func (t *TodoController) GetAll(c echo.Context) error {
	todos, err := (*t.todoService).GetAll()
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, toTodoDTOs(todos))
}

func (t *TodoController) SetIsDone(c echo.Context) error {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		return err
	}

	err = (*t.todoService).SetIsDone(uint(id))

	var todoNotFoundError *domainErrors.TodoNotFoundError
	if errors.As(err, &todoNotFoundError) {
		return c.NoContent(http.StatusNotFound)
	}

	return c.NoContent(http.StatusOK)
}
