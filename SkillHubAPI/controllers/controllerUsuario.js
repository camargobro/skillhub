import Usuario from "../models/modelUsuarios.js"
import bcrypt from "bcrypt"

export async function criarUsuario(req, res){
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(req.body.senha, saltRounds)
    const usuario = new Usuario({
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email,
        senha: senhaHash
})

    await usuario.save()
    res.status(201).send(usuario)
}
export async function buscarUsuarios(req, res){
    const usuarios = await Usuario.find()
    res.status(200).send(usuarios)
}

export async function excluirUsuario(req, res){
    const usuario = await Usuario.findByIdAndDelete(req.params.id)
    res.status(200).send('Usuário excluído com sucesso: ' + usuario)
}

export async function editarUsuario(req, res){
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email,
        senha: req.body.senha
    })
    res.status(200).send('Usuário editado com sucesso: ' + usuario)
}