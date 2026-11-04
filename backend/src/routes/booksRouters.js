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