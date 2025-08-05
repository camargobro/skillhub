import express from 'express'
import { autenticadorMiddleware } from '../middlewares/autenticadorMiddleware.js'
import { criarHabilidade, buscarHabilidades, editarHabilidade, excluirHabilidade } from '../controllers/controllerHabilidade.js'

const router = express.Router()

router.post('/', autenticadorMiddleware, criarHabilidade)
router.get('/', autenticadorMiddleware, buscarHabilidades)
router.put('/:id', autenticadorMiddleware, editarHabilidade)
router.delete('/:id', autenticadorMiddleware, excluirHabilidade)

export default router
