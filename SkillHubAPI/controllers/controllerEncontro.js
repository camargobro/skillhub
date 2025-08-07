import { postEncontro, getEncontros } from "../models/modelEncontros.js";

export async function criarEncontro(req, res){
    try{
        const { usuarioSolicitante, usuarioProvedor, habilidadeDesejada, habilidadeOferecida, tipo} = req.body;
        console.log(req.body)

        if(!usuarioSolicitante && !usuarioProvedor && !habilidadeDesejada && !habilidadeOferecida && !tipo){
            return res.status(401).send('Todos os campos devem ser preenchidos')
        }
        const encontro = await postEncontro({
            usuarioSolicitante,
            usuarioProvedor,
            habilidadeDesejada,
            habilidadeOferecida,
            tipo
        })
        res.status(201).send('Encontro criado com sucesso!' + encontro);
    }catch(error){
        console.log(error)
        res.status(500).send(error);
    }
}

export async function buscarEncontro(req, res){
    try{
        const encontros = await getEncontros();
        if(!encontros){
            res.status(404).send('Nenhum encontro foi achado.')
        }
        res.status(200).send(encontros);
    }catch(error){
        res.status(500).send(error);
    }
}
