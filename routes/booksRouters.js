import { Router } from 'express';
import { listarLivros, buscarLivro, cadastrarLivro, atualizarLivro,
excluirLivro } from '../controllers/booksControllers.js'



const router = Router();

router.get('/', listarLivros);
router.get('/books/:id', buscarLivro);
router.post('/books/:id', cadastrarLivro);
router.put('/books/:id', atualizarLivro)
router.patch('/books/:id', );
router.delete('/books/:id', excluirLivro);

export default router;