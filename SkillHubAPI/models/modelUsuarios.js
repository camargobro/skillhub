import mongoose, { mongo }  from 'mongoose' 

const usuarioSchema = new mongoose.Schema({ 
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    criadoEm: {type: Date, default: Date.now }
})

const Usuario = mongoose.model('Usuários', usuarioSchema);

export default Usuario


