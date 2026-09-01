import mysql from "mysql2/promise.js"

const conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "siteLivros"
})

export default conexao
