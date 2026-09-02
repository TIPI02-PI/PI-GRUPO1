import mysql from "mysql2/promise.js"

import "dotenv/config"

dotenv.config()

const conexao = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

export default conexao

// const conexao = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "siteLivros"
// })

