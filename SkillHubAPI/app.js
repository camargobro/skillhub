import express from 'express'
const app = express()
const port = 8080

import routeUsuarios from './routes/routeUsuarios.js'

app.use('/usuarios', routeUsuarios)


app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})