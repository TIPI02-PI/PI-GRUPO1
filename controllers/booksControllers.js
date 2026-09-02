import conexao from "../config/db.js"

export const listarLivros = async (req, res) => {
    try {
        const [livros] = await conexao.query(
            "SELECT * FROM book"
        )
        res.status(200).json(book)
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const buscarLivro = async (req, res) => {
    try {
        const [validacao] = await conexao.query(
            "SELECT * FROM book WHERE id = ?",
            [req.params.id]
        )

        if (validacao.length === 0) {
            return res.status(404).json({ mensagem: "Livro não encontrado." })
        }

        res.status(200).json(validacao[0])
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const cadastrarLivro = async (req, res) => {
    try {
        const { titulo, autor, editora, ano_lancamento } = req.body

        await conexao.query(
            "INSERT INTO book (titulo, autor, editora, ano_lancamento) VALUES (?, ?, ?, ?)",
            [titulo, autor, editora, ano_lancamento]
        )

        res.status(201).json({ mensagem: "Livro cadastrado com sucesso!" })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const atualizarLivro = async (req, res) => {
    try {
        const { titulo, autor, editora, ano_lancamento } = req.body

        await conexao.query(
            "UPDATE book SET titulo = ?, autor = ?, editora = ?, ano_lancamento = ? WHERE id = ?",
            [titulo, autor, editora, ano_lancamento, req.params.id]
        )

        res.status(200).json({ mensagem: "Livro 100% atualizado" })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const excluirLivro = async (req, res) => {
    try {
        await conexao.query(
            "DELETE FROM book WHERE id = ?",
            [req.params.id]
        )

        res.status(200).json({ mensagem: "Livro excluído." })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}



// export const listarbook = async (req, res) => {
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
// }

// export const buscarLivro = async (req, res) => {
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
// }

// export const cadastrarLivro = async (req, res) => {
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
// }

// export const atualizarLivro = async (req, res) => {
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
// }

// export const excluirLivro = async (req, res) => {
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
// }
