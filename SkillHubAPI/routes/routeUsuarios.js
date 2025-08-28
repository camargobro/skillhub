import express from 'express'
import { autenticadorMiddleware } from '../middlewares/autenticadorMiddleware.js'
import { criarUsuario, buscarUsuarios, excluirUsuario, editarUsuario, logarUsuario, escolhaHabilidades } from '../controllers/controllerUsuario.js'
const router = express.Router()

router.get('/', autenticadorMiddleware, buscarUsuarios)
router.post('/', criarUsuario)
router.post('/login', logarUsuario)
router.post('/:id/habilidades', autenticadorMiddleware, escolhaHabilidades)
router.delete('/:id', autenticadorMiddleware, excluirUsuario)
router.put('/:id', autenticadorMiddleware, editarUsuario)

export default router