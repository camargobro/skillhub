import express from 'express'
import { criarUsuario, buscarUsuarios, excluirUsuario, editarUsuario } from '../controllers/controllerUsuario.js'
const router = express.Router()

router.get('/', buscarUsuarios)
router.post('/', criarUsuario)
router.delete('/:id', excluirUsuario)
router.put('/:id', editarUsuario)

export default router