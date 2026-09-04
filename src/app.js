import express from "express"
import booksRouters from "./routes/booksRouters .js"
import usersRouters from "./routes/usersRouters.js"

import "dotenv/config"

const app = express()

app.use(express.json())


app.use("/books", booksRouters)
app.use("/users", usersRouters)
