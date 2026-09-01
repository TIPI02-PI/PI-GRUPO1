import express from "express"

const app = express()
 
app.use(express.json())


export default app;


const cadastros = [
    {
        id: 1,
        nome: "Grazielly Lacerda",
        usuario: "grazlacerd",
        senha: 123456,
    },
    {
        id: 2,
        nome: "Gabriel Miguel",
        usuario: "gabmiguel",
        senha: 654321,
    },
    {
        id: 3,
        nome: "Sthefany da Cruz",
        usuario: "sthefsruz",
        senha: 678901,
    },
    {
        id: 4,
        nome: "Arlei Santos",
        usuario: "Arleisantos",
        senha: 109876,
    },
    {
        id: 5,
        nome: "Andre Coelho",
        usuario: "Andrewcoelho",
        senha: 102938,
    }
]

const usersCadastrados = (id) => {
    return cadastros.findIndex(cadastros => {
        return cadastros.id === Number(id)
    })
}

//rota raiz
app.get("/", (req, res) => {
    res.status(200).send("Usuarios cadastrados")
})

//rota cadastros
app.get("/cadastros", (req, res) => {
    res.status(200).json(cadastros)
})

//rota id
app.get("/cadastros/:id", (req, res) => {
    const index = usersCadastrados(req.params.id)

    res.status(200).json(cadastros[index])
})

app.post("/cadastros", (req, res) => {
    cadastros.push(req.body)

    res.status(201).send("Usuário cadastrado com sucesso!")
})

app.put("/cadastros/:id", (req, res) => {
    const index = usersCadastrados(req.params.id)

    cadastros[index].senha = req.body.senha
    cadastros[index].usuario = req.body.usuario

    res.status(200).json(cadastros[index])
})

app.delete("/cadastros/:id", (req, res) => {
    const index = usersCadastrados(req.params.id)

    cadastros.splice(index, 1)

    res.status(200).send("Cadastro excluido.")
})