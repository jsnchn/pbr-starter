package main

import (
    "log"

    "github.com/pocketbase/pocketbase"
    "github.com/pocketbase/pocketbase/core"
    "github.com/labstack/echo/v5"
)

func main() {
    app := pocketbase.New()

    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
        e.Router.GET("/api/hello", func(c echo.Context) error {
            return c.JSON(200, map[string]string{"message": "Hello from PocketBase!"})
        })
        return nil
    })

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
