import { getUsuarios, deleteUsuario, postUsuario, putUsuario } from "../models/modelUsuarios.js"
import bcrypt from "bcrypt"

export async function criarUsuario(req, res){
    try{
    const {nome, idade, email, senha} = req.body
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds)
    const usuario = await postUsuario(
        {
        nome: nome,
        idade: idade,
        email: email,
        senha: senhaHash
        }
    )
    res.status(201).send(usuario)
    }catch(error){
    res.status(500).send(error)
    }
}

export async function buscarUsuarios(req, res){
    try{
        const usuarios = await getUsuarios()
        console.log(usuarios)
        res.status(200).send(usuarios)
    } catch(error){
        res.status(500).send(error)
    }
    
}

export async function excluirUsuario(req, res){
    try{
    const usuario = await deleteUsuario(req.params.id)
        res.status(200).send(`Usuário excluído com sucesso: ${usuario}`)
    } catch(error){
        res.status(500).send(error)
    }
}

export async function editarUsuario(req, res){
    try{
    const {nome, idade, email, senha} = req.body
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds)
    const usuario = await putUsuario(req.params.id, {
        nome: nome,
        idade: idade,
        email: email,
        senha: senhaHash
    })
    res.status(200).send(`Usuário editado com sucesso: ${usuario}`)
    } catch(error){
        res.status(500).send(error)
    }
}