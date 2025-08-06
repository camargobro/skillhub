import mongoose, { mongo } from 'mongoose'

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    encontros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'encontros' }],
    criadoEm: { type: Date, default: Date.now }
})

export const Usuario = mongoose.model('usuarios', usuarioSchema);

export async function postUsuario(dadosUsuario){
    const usuario = new Usuario(dadosUsuario)
    return await usuario.save()
}

export async function getUsuarios(){
    return await Usuario.find().populate('encontros')
}

export async function deleteUsuario(id){
    return await Usuario.findByIdAndDelete(id)
}

export async function putUsuario(id, usuarioAtualizado){
    return await Usuario.findByIdAndUpdate(id, usuarioAtualizado)
}

export async function loginUsuario(email){
    return await Usuario.findOne({email})
}


