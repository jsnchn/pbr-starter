package main

import (
    "log"
    "net/http"
    "os"

    "github.com/pocketbase/pocketbase"
    "github.com/pocketbase/pocketbase/apis"
    "github.com/pocketbase/pocketbase/core"
)

func main() {
    app := pocketbase.New()

    app.OnServe().BindFunc(func(se *core.ServeEvent) error {
        // serves static files from the provided public dir (if exists)
        se.Router.GET("/{path...}", apis.Static(os.DirFS("./pb_public"), false))

        se.Router.GET("/api/hello", func(e *core.RequestEvent) error {
            return e.JSON(http.StatusOK, map[string]string{"message": "Hello from PocketBase!"})
        })

        return se.Next()
    })

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}