import { getUsuarios, deleteUsuario, postUsuario, putUsuario, loginUsuario, escolherHabilidade } from "../models/modelUsuarios.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config();

const chaveJWT = process.env.JWT_KEY

export async function criarUsuario(req, res){
    try{
    const {nome, idade, email, senha} = req.body
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds)

    if(!nome && !idade && !email && !senha){
        return res.status(401).send('Todos os campos devem ser preenchidos')
    }

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
        if(!usuarios){
            res.status(404).send('Nenhum usuário encontrado')
        }
        console.log(usuarios)
        res.status(200).send(usuarios)
    } catch(error){
        res.status(500).send(error)
    }
    
}

export async function excluirUsuario(req, res){
    try{
    const usuario = await deleteUsuario(req.params.id)

        if(!usuario){
            return res.status(404).send('Usuário não encontrado')
        }
    
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

export async function logarUsuario(req, res){
    try{
    const { email, senha } = req.body
     
    
    if (!email || !senha) {
      return res.status(400).send('E-mail e senha são obrigatórios.')
    }

    const usuario = await loginUsuario(email)
    
    if(!usuario){
        return res.status(401).send('Usuário não encontrado.')
    }

    const verificaSenha = await bcrypt.compare(senha, usuario.senha);
    if(!verificaSenha){
        return res.status(401).send('E-mail ou senha incorretos.')
    }
        const token = jwt.sign( {email}, chaveJWT, { expiresIn: '1h' })   
        res.status(200).send(token)
    } catch(error){
        res.status(500).send('Ocorreu um erro.')
        console.log(error)
    }
}

export async function escolhaHabilidades(req, res){
    try{
        const id = req.params.id
        const {habilidades} = req.body
        const usuarioAtualizado = await escolherHabilidade(id, habilidades)

        res.status(201).send(usuarioAtualizado)
    } catch(error){
        res.status(500).send(error)
    }
}