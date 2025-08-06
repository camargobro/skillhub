import express from 'express';
import { criarEncontro, buscarEncontro } from '../controllers/controllerEncontro.js';
import { autenticadorMiddleware } from '../middlewares/autenticadorMiddleware.js';
const router = express.Router();

router.post('/', autenticadorMiddleware, criarEncontro);
router.get('/', autenticadorMiddleware, buscarEncontro);

export default router