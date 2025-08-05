import { deleteHabilidade, getHabilidades, postHabilidades, putHabilidade } from "../models/modelHabilidades.js";

export async function criarHabilidade(req, res){
    try{
        const {nome, descricao} = req.body;
        await postHabilidades({
            nome,
            descricao
        })
        res.status(201).send(`Habilidade criada com sucesso!`)
    } catch(error){
        res.status(500).send(error)
    }
}
export async function buscarHabilidades(req, res){
    try{
        const habilidades = await getHabilidades()
        res.status(200).send(habilidades)
    }catch(error){
        res.status(500).send(error)
    }
}
export async function editarHabilidade(req, res){
    try{
        const {nome, descricao} = req.body;
        const id = req.params.id
        await putHabilidade(id, {
            nome: nome,
            descricao: descricao
        })
        res.status(200).send('Habilidade editada com sucesso!')
    }catch(error){
        res.status(500).send(error)
    }
}       
export async function excluirHabilidade(req, res){
    try{
        const id = req.params.id
        await deleteHabilidade(id)
        res.status(200).send('Habilidade excluída com sucesso!')
    }catch(error){
        res.status(500).send(error)
    }
}