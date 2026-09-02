import conexao from "../config/db.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const CHAVE_SECRETA = process.env.JWT_SECRET

export const login = async (req, res) => {
    try {
        const { usuario, senha } = req.body

        const [resultado] = await conexao.query(
            "SELECT id, nome, usuario FROM cadastros WHERE usuario = ? AND senha = ?",
            [usuario, senha]
        )

        if (resultado.length === 0) {
            return res.status(401).json({ mensagem: "Usuário ou senha inválidos." })
        }

        const usuarioLogado = resultado[0]

        const token = jwt.sign(
            { id: usuarioLogado.id, usuario: usuarioLogado.usuario },
            CHAVE_SECRETA,
            { expiresIn: "1h" }
        )

        res.status(200).json({ token })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const listarCadastros = async (req, res) => {
    try {
        const [cadastros] = await conexao.query(
            "SELECT id, nome, usuario FROM cadastros"
        )
        res.status(200).json(cadastros)
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const buscarCadastroPorId = async (req, res) => {
    try {
        const [validacao] = await conexao.query(
            "SELECT id, nome, usuario FROM cadastros WHERE id = ?",
            [req.params.id]
        )

        if (validacao.length === 0) {
            return res.status(404).json({ mensagem: "Cadastro não encontrado." })
        }

        res.status(200).json(validacao[0])
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const cadastrarCadastro = async (req, res) => {
    try {
        const { nome, usuario, senha } = req.body

        await conexao.query(
            "INSERT INTO cadastros (nome, usuario, senha) VALUES (?, ?, ?)",
            [nome, usuario, senha]
        )

        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const atualizarCadastro = async (req, res) => {
    try {
        const { usuario, senha } = req.body
        const idParametro = req.params.id
        const idUsuarioLogado = req.usuario.id

        if (Number(idParametro) !== idUsuarioLogado) {
            return res.status(403).json({ mensagem: "Acesso negado: Você só pode alterar seu próprio cadastro." })
        }

        await conexao.query(
            "UPDATE cadastros SET usuario = ?, senha = ? WHERE id = ?",
            [usuario, senha, idParametro]
        )

        res.status(200).json({ mensagem: "Cadastro 100% atualizado" })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

export const excluirCadastro = async (req, res) => {
    try {
        const idParametro = req.params.id
        const idUsuarioLogado = req.usuario.id

        if (Number(idParametro) !== idUsuarioLogado) {
            return res.status(403).json({ mensagem: "Acesso negado: Você só pode excluir seu próprio cadastro." })
        }

        await conexao.query(
            "DELETE FROM cadastros WHERE id = ?",
            [idParametro]
        )

        res.status(200).json({ mensagem: "Cadastro excluído." })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}





// export const listarCadastros = async (req, res) => {
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
// }

// export const buscarCadastroPorId = async (req, res) => {
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
// }

// export const cadastrarCadastro = async (req, res) => {
//     try {
//         const { nome, usuario, senha } = req.body

//         await conexao.query(
//             "INSERT INTO cadastros (nome, usuario, senha) VALUES (?, ?, ?)",
//             [nome, usuario, senha]
//         )

//         res.status(201).json({
//             mensagem: "Usuário cadastrado com sucesso!"
//         })
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// }

// export const atualizarCadastro = async (req, res) => {
//     try {
//         const { usuario, senha } = req.body

//         await conexao.query(
//             "UPDATE cadastros SET usuario = ?, senha = ? WHERE id = ?",
//             [usuario, senha, req.params.id]
//         )

//         res.status(200).json({
//             mensagem: "cadastro 100% atualizado"
//         })
//     } catch (erro) {
//         res.status(500).json({
//             erro: erro.mensage
//         })
//     }
// }

// export const excluirCadastro = async (req, res) => {
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
// }
