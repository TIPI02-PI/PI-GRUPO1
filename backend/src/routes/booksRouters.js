import { Router } from 'express';
import { listarLivros, buscarLivro, cadastrarLivro, atualizarLivro,
excluirLivro } from '../controllers/booksControllers.js'



const router = Router();

router.get('/books', listarLivros);
router.get('/books/:id', buscarLivro);
router.post('/books/:i d', cadastrarLivro); //Revisar
router.put('/books/:id', atualizarLivro)
// router.patch('/books/:id', );
router.delete('/books/:id', excluirLivro);

export default router;