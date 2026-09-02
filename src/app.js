import express from "express"
import conexao from "../config/db.js"

const app = express()

app.use(express.json())

export default app











//usuarios

// const cadastros = [
//     {
//         id: 1,
//         nome: "Grazielly Lacerda",
//         email: "grazielly@email.com",
//         perfil: "administrador",
//         senha: 123456,
//     },
//     {
//         id: 2,
//         nome: "Gabriel Miguel",
//         email: "gabriel@email.com",
//         perfil: "user",
//         senha: 654321,
//     },
//     {
//         id: 3,
//         nome: "Sthefany da Cruz",
//         email: "sthefany@email.com",
//         perfil: "visitante",
//         senha: 678901,
//     },
//     {
//         id: 4,
//         nome: "Arlei Santos",
//         email: "arlei@email.com",
//         perfil: "user",
//         senha: 109876,
//     },
//     {
//         id: 5,
//         nome: "Andre Coelho",
//         email: "andre@email.com",
//         perfil: "administrador",
//         senha: 102938,
//     }
// ]

// const usersCadastrados = (id) => {
//     return cadastros.findIndex(cadastros => {
//         return cadastros.id === Number(id)
//     })
// }

// // rota raiz
// app.get("/", (req, res) => {
//     res.status(200).send("Usuarios cadastrados")
// })

// // rota cadastros
// app.get("/cadastros", (req, res) => {
//     res.status(200).json(cadastros)
// })

// // rota id
// app.get("/cadastros/:id", (req, res) => {
//     const index = usersCadastrados(req.params.id)

//     res.status(200).json(cadastros[index])
// })

// app.post("/cadastros", (req, res) => {
//     cadastros.push(req.body)

//     res.status(201).send("Usuário cadastrado com sucesso!")
// })

// app.put("/cadastros/:id", (req, res) => {
//     const index = usersCadastrados(req.params.id)

//     cadastros[index].email = req.body.email
//     cadastros[index].perfil = req.body.perfil
//     cadastros[index].senha = req.body.senha

//     res.status(200).json(cadastros[index])
// })

// app.delete("/cadastros/:id", (req, res) => {
//     const index = usersCadastrados(req.params.id)

//     cadastros.splice(index, 1)

//     res.status(200).send("Cadastro excluido.")
// })

//-------------------------------------------------------------------------------------------------------

// app.get("/", (req, res) => {
//     res.status(200).send("Usuarios cadastrados")
// })

// // rota para puxar todos os cadastros
// app.get("/cadastros", async (req, res) => {
//     try {
//         const [cadastros] = await conexao.query(
//             "SELECT * FROM cadastros"
//         )
//         res.json(cadastros)
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })

// // rota para puxar com o id
// app.get("/cadastros/:id", async (req, res) => {
//     try {
//         const [validacao] = await conexao.query(
//             "SELECT * FROM cadastros WHERE id = ?",
//             [req.params.id]
//         )

//         if (validacao.length === 0) {
//             return res.status(400).json({
//                 mensagem: "cadastro não encontrado :("
//             })
//         }
//         res.json(validacao)
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })

// // rota para criar um novo cadastro
// app.post("/cadastros", async (req, res) => {
//     try {
//         const { nome, email, perfil, senha } = req.body

//         await conexao.query(
//             "INSERT INTO cadastros (nome, email, perfil, senha) VALUES (?, ?, ?, ?)",
//             [nome, email, perfil, senha]
//         )

//         res.status(201).json({
//             mensagem: "Usuário cadastrado com sucesso!"
//         })
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })

// // rota para atualizar o cadastro
// app.put("/cadastros/:id", async (req, res) => {
//     try {
//         const { email, perfil, senha } = req.body

//         await conexao.query(
//             "UPDATE cadastros SET email = ?, perfil = ?, senha = ? WHERE id = ?",
//             [email, perfil, senha, req.params.id]
//         )

//         res.status(200).json({
//             mensagem: "cadastro 100% atualizado"
//         })
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })

// // rota para deletar o cadastro
// app.delete("/cadastros/:id", async (req, res) => {
//     try {
//         await conexao.query(
//             "DELETE FROM cadastros WHERE id = ?",
//             [req.params.id]
//         )

//         res.status(200).json({
//             mensagem: "Cadastro excluido."
//         })
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })


//=======================================================================================================


//livros

// const livros = [
//     {
//         id: 1,
//         titulo: "O Ateneu",
//         autor: "Raul Pompeia",
//         editora: "Livraria Francisco Alves",
//         ano_lancamento: 1888
//     },
//     {
//         id: 2,
//         titulo: "Capítulos de História Colonial",
//         autor: "Capistrano de Abreu",
//         editora: "Sociedade Capistrano de Abreu",
//         ano_lancamento: 1907
//     },
//     {
//         id: 3,
//         titulo: "Os Sertões",
//         autor: "Euclides da Cunha",
//         editora: "Laemmert & Cia.",
//         ano_lancamento: 1902
//     },
//     {
//         id: 4,
//         titulo: "Gramática Expositiva do Português Elementar",
//         autor: "Eduardo Carlos Pereira",
//         editora: "Companhia Editora Nacional",
//         ano_lancamento: 1907
//     },
//     {
//         id: 5,
//         titulo: "História da Literatura Brasileira",
//         autor: "José Veríssimo",
//         editora: "Livraria Francisco Alves",
//         ano_lancamento: 1916
//     }
// ]

// const buscarLivro = (id) => {
//     return livros.findIndex(livros => {
//         return livros.id === Number(id)
//     })
// }

// // rota raiz
// app.get("/", (req, res) => {
//     res.status(200).send("Livros de estudo em Domínio Público")
// })

// // rota livros
// app.get("/livros", (req, res) => {
//     res.status(200).json(livros)
// })

// // rota id
// app.get("/livros/:id", (req, res) => {
//     const index = buscarLivro(req.params.id)

//     res.status(200).json(livros[index])
// })

// app.post("/livros", (req, res) => {
//     livros.push(req.body)

//     res.status(201).send("Livro cadastrado com sucesso!")
// })

// app.put("/livros/:id", (req, res) => {
//     const index = buscarLivro(req.params.id)

//     livros[index].titulo = req.body.titulo
//     livros[index].autor = req.body.autor
//     livros[index].editora = req.body.editora
//     livros[index].ano_lancamento = req.body.ano_lancamento

//     res.status(200).json(livros[index])
// })

// app.delete("/livros/:id", (req, res) => {
//     const index = buscarLivro(req.params.id)

//     livros.splice(index, 1)

//     res.status(200).send("Livro excluido.")
// })

//-------------------------------------------------------------------------------------------------------

// app.get("/", (req, res) => {
//     res.status(200).send("Livros de estudo em Domínio Público")
// })

// // rota para puxar todos os livros
// app.get("/livros", async (req, res) => {
//     try {
//         const [livros] = await conexao.query(
//             "SELECT * FROM livros"
//         )
//         res.json(livros)
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })

// // rota para puxar o livro com o id
// app.get("/livros/:id", async (req, res) => {
//     try {
//         const [validacao] = await conexao.query(
//             "SELECT * FROM livros WHERE id = ?",
//             [req.params.id]
//         )

//         if (validacao.length === 0) {
//             return res.status(400).json({
//                 mensagem: "livro não encontrado :("
//             })
//         }
//         res.json(validacao)
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })

// // rota para cadastrar um novo livro
// app.post("/livros", async (req, res) => {
//     try {
//         const { titulo, autor, editora, ano_lancamento } = req.body

//         await conexao.query(
//             "INSERT INTO livros (titulo, autor, editora, ano_lancamento) VALUES (?, ?, ?, ?)",
//             [titulo, autor, editora, ano_lancamento]
//         )

//         res.status(201).json({
//             mensagem: "Livro cadastrado com sucesso!"
//         })
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })

// // rota para atualizar o livro
// app.put("/livros/:id", async (req, res) => {
//     try {
//         const { titulo, autor, editora, ano_lancamento } = req.body

//         await conexao.query(
//             "UPDATE livros SET titulo = ?, autor = ?, editora = ?, ano_lancamento = ? WHERE id = ?",
//             [titulo, autor, editora, ano_lancamento, req.params.id]
//         )

//         res.status(200).json({
//             mensagem: "livro 100% atualizado"
//         })
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })

// // rota para deletar o livro
// app.delete("/livros/:id", async (req, res) => {
//     try {
//         await conexao.query(
//             "DELETE FROM livros WHERE id = ?",
//             [req.params.id]
//         )

//         res.status(200).json({
//             mensagem: "Livro excluido."
//         })
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// })
