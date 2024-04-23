package main

import (
	"fmt"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"golang/pkg/application"
	"golang/pkg/domain/abstract"
	"golang/pkg/infrastructure"
	"golang/pkg/presentation"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
	"strconv"
)

type Config struct {
	Port             int
	ConnectionString string
	Migrate          bool
}

func main() {
	e := echo.New()
	config, err := readConfig()
	if err != nil {
		panic(err)
	}

	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{}))
	e.Use(middleware.Recover())

	todoController, err := getController(config)
	if err != nil {
		panic(err)
	}

	e.POST("/api/todos/", todoController.Create)
	e.GET("/api/todos/", todoController.GetAll)
	e.DELETE("/api/todos/:id", todoController.SetIsDone)

	e.Logger.Fatal(e.Start(fmt.Sprintf(":%d", config.Port)))
}

func readConfig() (*Config, error) {
	err := godotenv.Load()
	if err != nil && !os.IsNotExist(err) {
		return nil, err
	}

	port, err := strconv.Atoi(os.Getenv("TODOAPP_PORT"))
	if err != nil {
		return nil, err
	}

	migrate, err := strconv.ParseBool(os.Getenv("TODOAPP_MIGRATE"))
	if err != nil {
		return nil, err
	}

	return &Config{
		Port:             port,
		ConnectionString: os.Getenv("TODOAPP_CONNECTIONSTRING"),
		Migrate:          migrate,
	}, nil
}

func getController(config *Config) (*presentation.TodoController, error) {
	service, err := getService(config)
	if err != nil {
		return nil, err
	}

	return presentation.NewTodoController(&service), nil
}

func getService(config *Config) (abstract.TodoService, error) {
	repository, err := getRepository(config)
	if err != nil {
		return nil, err
	}

	service := application.NewTodoService(&repository)

	return service, nil
}

func getRepository(config *Config) (abstract.TodoRepository, error) {
	db, err := getGorm(config)
	if err != nil {
		return nil, err
	}

	if config.Migrate {
		if err = infrastructure.MigrateGorm(db); err != nil {
			return nil, err
		}
	}

	repository := infrastructure.NewTodoRepository(db)

	return repository, nil
}

func getGorm(config *Config) (*gorm.DB, error) {
	return gorm.Open(postgres.Open(config.ConnectionString), &gorm.Config{})
}
