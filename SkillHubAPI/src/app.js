import express from 'express'
import conectaDB from './config/dbConnect.js'

const conexao = await conectaDB()
conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o DB feita com sucesso!")
})

const app = express()
const port = 8080

import routeUsuarios from '../routes/routeUsuarios.js'

app.use(express.json());
app.use('/usuarios', routeUsuarios)


app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})