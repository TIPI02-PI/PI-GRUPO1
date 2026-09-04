import { Router } from 'express';
import { login, listarCadastros, buscarCadastroPorId, cadastrarCadastro, atualizarCadastro, excluirCadastro } from '../controllers/usersControllers.js'



const router = Router();

router.get('/users', login);

router.get('/users', listarCadastros);
router.get('/users/:id', buscarCadastroPorId);
router.post('/users/:id', cadastrarCadastro);
router.put('/users/:id', atualizarCadastro)
router.patch('/users/:id', );
router.delete('/users/:id', excluirCadastro);

export default router;