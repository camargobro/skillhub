import mongoose from 'mongoose'
import {Usuario} from './modelUsuarios.js'
import { atualizarEncontroUsuario } from '../middlewares/atualizarEncontroUsuarioMiddleware.js';

const encontroSchema = new mongoose.Schema({
    usuarioSolicitante: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true},
    usuarioProvedor: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true},
    habilidadeDesejada: { type: mongoose.Schema.Types.ObjectId, ref: 'habilidades', required: true},
    habilidadeOferecida: { type: mongoose.Schema.Types.ObjectId, ref: 'habilidades', required: true},
    tipo: { type: String, required: true},
    criadoEm: { type: Date, default: Date.now }
})


    encontroSchema.post('save', async function(doc) {
        await atualizarEncontroUsuario(doc);
});

const Encontro = mongoose.model('encontros', encontroSchema);

export async function postEncontro(novoEncontro){
    const encontro = new Encontro(novoEncontro)
    return await encontro.save();
}
export async function getEncontros(){
    return await Encontro.find()
}


