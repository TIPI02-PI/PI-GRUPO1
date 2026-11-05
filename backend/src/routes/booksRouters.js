import { Router } from 'express'
import { 
  listarLivros, 
  buscarLivro, 
  cadastrarLivro, 
  atualizarLivro, 
  excluirLivro 
} from '../controllers/booksControllers.js'

const booksRoutes = Router()

booksRoutes.get('/books', listarLivros)
booksRoutes.get('/books/:id', buscarLivro)
booksRoutes.post('/books', cadastrarLivro)
booksRoutes.put('/books/:id', atualizarLivro)
booksRoutes.delete('/books/:id', excluirLivro)

export default booksRoutes
