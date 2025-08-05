import mongoose, { mongo } from 'mongoose'

const habilidadeSchema = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true},
    criadoEm: { type: Date, default: Date.now }
})
const Habilidade = mongoose.model('habilidades', habilidadeSchema)

export async function postHabilidades(novaHabilidade){
    const habilidade = new Habilidade(novaHabilidade)
    return await habilidade.save();
}
export async function getHabilidades(){
    return await Habilidade.find();
}
export async function putHabilidade(idHabilidade, habilidadeEditada){
    return await Habilidade.findByIdAndUpdate(idHabilidade, habilidadeEditada)
}
export async function deleteHabilidade(idHabilidade){
    return await Habilidade.findByIdAndDelete(idHabilidade);
}