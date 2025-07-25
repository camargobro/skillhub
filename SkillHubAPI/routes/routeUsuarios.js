import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Rota usuários funcionando')
})

export default router