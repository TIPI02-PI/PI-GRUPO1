import pool from '../config/db.js'

// Get all books
export const getBooks = async (req, res) => {
  try {
    const [books] = await pool.query('SELECT * FROM books_tb')
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error: error.message })
  }
}

// Get book by ID
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query('SELECT * FROM books_tb WHERE book_id = ?', [id])

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' })
    }

    res.status(200).json(rows[0])
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error: error.message })
  }
}

// Create a new book (single)
export const createBook = async (req, res) => {
  try {
    const {
      book_isbn,
      book_title,
      book_subtitle,
      book_author,
      book_publisher,
      book_year_original_publication,
      book_year_edition_publication,
      book_url_cover,
      book_url_download_pdf,
      book_format,
      book_page_number,
      book_genre,
      language_id
    } = req.body

    const query = `
      INSERT INTO books_tb (
        book_isbn, book_title, book_subtitle, book_author, book_publisher,
        book_year_original_publication, book_year_edition_publication,
        book_url_cover, book_url_download_pdf, book_format, book_page_number, book_genre, language_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [result] = await pool.query(query, [
      book_isbn,
      book_title,
      book_subtitle,
      book_author,
      book_publisher,
      book_year_original_publication,
      book_year_edition_publication,
      book_url_cover,
      book_url_download_pdf,
      book_format,
      book_page_number,
      book_genre,
      language_id
    ])

    res.status(201).json({ message: 'Book successfully registered!', book_id: result.insertId })
  } catch (error) {
    res.status(500).json({ message: 'Error registering book', error: error.message })
  }
}

// Create multiple books (batch insertion / JSON array)
export const createBooksBatch = async (req, res) => {
  try {
    const books = Array.isArray(req.body) ? req.body : [req.body]

    if (!books || books.length === 0) {
      return res.status(400).json({ message: 'No books provided for registration.' })
    }

    for (const book of books) {
      await pool.query('INSERT INTO books_tb SET ?', [book])
    }

    res.status(201).json({
      message: `${books.length} book(s) successfully registered!`
    })
  } catch (error) {
    res.status(500).json({ message: 'Error registering books in batch', error: error.message })
  }
}

// Update existing book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params
    const {
      book_isbn,
      book_title,
      book_subtitle,
      book_author,
      book_publisher,
      book_year_original_publication,
      book_year_edition_publication,
      book_url_cover,
      book_url_download_pdf,
      book_format,
      book_page_number,
      book_genre,
      language_id
    } = req.body

    const query = `
      UPDATE books_tb SET
        book_isbn = ?, book_title = ?, book_subtitle = ?, book_author = ?, book_publisher = ?, book_year_original_publication = ?, book_year_edition_publication = ?, book_url_cover = ?, book_url_download_pdf = ?, book_format = ?, book_page_number = ?, book_genre = ?, language_id = ?
      WHERE book_id = ?
    `

    const [result] = await pool.query(query, [
      book_isbn,
      book_title,
      book_subtitle,
      book_author,
      book_publisher,
      book_year_original_publication,
      book_year_edition_publication,
      book_url_cover,
      book_url_download_pdf,
      book_format,
      book_page_number,
      book_genre,
      language_id,
      id
    ])

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Book not found for update' })
    }

    res.status(200).json({ message: 'Book successfully updated!' })
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error: error.message })
  }
}

// Delete book by ID
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM books_tb WHERE book_id = ?', [id])

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Book not found for deletion' })
    }

    res.status(200).json({ message: 'Book successfully deleted!' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error: error.message })
  }
}




// import pool from '../config/db.js'

// // listar todos os livros
// export const listarLivros = async (req, res) => {
//   try {
//     const [livros] = await pool.query('SELECT * FROM books')
//     res.status(200).json(livros)
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao buscar livros', error: error.message })
//   }
// }

// // buscar livro por ID
// export const buscarLivro = async (req, res) => {
//   try {
//     const { id } = req.params
//     const [rows] = await pool.query('SELECT * FROM books WHERE book_id = ?', [id])

//     if (rows.length === 0) {
//       return res.status(404).json({ message: 'Livro não encontrado' })
//     }

//     res.status(200).json(rows[0])
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao buscar livro', error: error.message })
//   }
// };

// // cadastrar novo livro
// export const cadastrarLivro = async (req, res) => {
//   try {
//     const {
//       book_isbn,
//       book_title,
//       book_subtitle,
//       book_author,
//       book_publisher,
//       book_year_original_publication,
//       book_year_edition_publication,
//       book_url_cover,
//       book_language,
//       book_format,
//       book_page_number,
//       book_genre
//     } = req.body

//     const query = `
//       INSERT INTO books (
//         book_isbn, book_title, book_subtitle, book_author, book_publisher,
//         book_year_original_publication, book_year_edition_publication,
//         book_url_cover, book_language, book_format, book_page_number, book_genre
//       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `

//     const [result] = await pool.query(query, [
//       book_isbn,
//       book_title,
//       book_subtitle,
//       book_author,
//       book_publisher,
//       book_year_original_publication,
//       book_year_edition_publication,
//       book_url_cover,
//       book_language,
//       book_format,
//       book_page_number,
//       book_genre
//     ])

//     res.status(201).json({ message: 'Livro cadastrado com sucesso!', book_id: result.insertId })
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao cadastrar livro', error: error.message })
//   }
// };

// // atualizar livro existente
// export const atualizarLivro = async (req, res) => {
//   try {
//     const { id } = req.params
//     const {
//       book_isbn,
//       book_title,
//       book_subtitle,
//       book_author,
//       book_publisher,
//       book_year_original_publication,
//       book_year_edition_publication,
//       book_url_cover,
//       book_language,
//       book_format,
//       book_page_number,
//       book_genre
//     } = req.body

//     const query = `
//       UPDATE books SET
//         book_isbn = ?, book_title = ?, book_subtitle = ?, book_author = ?, book_publisher = ?,
//         book_year_original_publication = ?, book_year_edition_publication = ?,
//         book_url_cover = ?, book_language = ?, book_format = ?, book_page_number = ?, book_genre = ?
//       WHERE book_id = ?
//     `

//     const [result] = await pool.query(query, [
//       book_isbn,
//       book_title,
//       book_subtitle,
//       book_author,
//       book_publisher,
//       book_year_original_publication,
//       book_year_edition_publication,
//       book_url_cover,
//       book_language,
//       book_format,
//       book_page_number,
//       book_genre,
//       id
//     ])

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'Livro não encontrado para atualização' })
//     }

//     res.status(200).json({ message: 'Livro atualizado com sucesso!' })
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao atualizar livro', error: error.message })
//   }
// }

// // deletar livro por id
// export const excluirLivro = async (req, res) => {
//   try {
//     const { id } = req.params
//     const [result] = await pool.query('DELETE FROM books WHERE book_id = ?', [id])

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'Livro não encontrado para exclusão' })
//     }

//     res.status(200).json({ message: 'Livro excluído com sucesso!' })
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao excluir livro', error: error.message })
//   }
// }



// import connection from "../config/db.js"

// export const listarLivros = async (req, res) => {
//     try {
//         const [livros] = await connection.query(
//             "SELECT * FROM book"
//         )
//         res.status(200).json(livros)
//     } catch (erro) {
//         res.status(500).json({ erro: erro.message })
//     }
// }

// export const buscarLivro = async (req, res) => {
//     try {
//         const [validacao] = await connection.query(
//             "SELECT * FROM book WHERE book_id = ?",
//             [req.params.id]
//         )

//         if (validacao.length === 0) {
//             return res.status(404).json({ mensagem: "Livro não encontrado." })
//         }

//         res.status(200).json(validacao[0])
//     } catch (erro) {
//         res.status(500).json({ erro: erro.message })
//     }
// }

// export const cadastrarLivro = async (req, res) => {
//     try {
//         const { titulo, data_lancamento, id_autor } = req.body

//         await connection.query(
//             "INSERT INTO book (book_title, book_release_date, fk_author_id) VALUES (?, ?, ?)",
//             [titulo, data_lancamento, id_autor]
//         )

//         res.status(201).json({ mensagem: "Livro cadastrado com sucesso!" })
//     } catch (erro) {
//         res.status(500).json({ erro: erro.message })
//     }
// }

// export const atualizarLivro = async (req, res) => {
//     try {
//         const { titulo, data_lancamento, id_autor } = req.body

//         const [resultado] = await connection.query(
//             "UPDATE book SET book_title = ?, book_release_date = ?, fk_author_id = ? WHERE book_id = ?",
//             [titulo, data_lancamento, id_autor, req.params.id]
//         )

//         if (resultado.affectedRows === 0) {
//             return res.status(404).json({ mensagem: "Livro não encontrado." })
//         }

//         res.status(200).json({ mensagem: "Livro atualizado com sucesso!" })
//     } catch (erro) {
//         res.status(500).json({ erro: erro.message })
//     }
// }

// export const excluirLivro = async (req, res) => {
//     try {
//         const [resultado] = await connection.query(
//             "DELETE FROM book WHERE book_id = ?",
//             [req.params.id]
//         )

//         if (resultado.affectedRows === 0) {
//             return res.status(404).json({ mensagem: "Livro não encontrado." })
//         }

//         res.status(200).json({ mensagem: "Livro excluído com sucesso." })
//     } catch (erro) {
//         res.status(500).json({ erro: erro.message })
//     }
// }





// export const listarbook = async (req, res) => {
//     try {
//         const [livros] = await connection.query(
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
//         const [validacao] = await connection.query(
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

//         await connection.query(
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

//         await connection.query(
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
//         await connection.query(
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
