import { Router } from 'express'
import { 
  getBooks, 
  getBookById, 
  createBook, 
  createBooksBatch, 
  updateBook, 
  deleteBook 
} from '../controllers/booksControllers.js'

const booksRoutes = Router()

booksRoutes.get('/books', getBooks)
booksRoutes.get('/books/:id', getBookById)
booksRoutes.post('/books', createBook)
booksRoutes.post('/books/batch', createBooksBatch)
booksRoutes.put('/books/:id', updateBook)
booksRoutes.delete('/books/:id', deleteBook)

export default booksRoutes





// import { Router } from 'express';
// import { listarLivros, buscarLivro, cadastrarLivro, atualizarLivro,
// excluirLivro } from '../controllers/booksControllers.js'



// const router = Router();

// router.get('/books', listarLivros);
// router.get('/books/:id', buscarLivro);
// router.post('/books/:i d', cadastrarLivro); //Revisar
// router.put('/books/:id', atualizarLivro)
// // router.patch('/books/:id', );
// router.delete('/books/:id', excluirLivro);

// export default router;
