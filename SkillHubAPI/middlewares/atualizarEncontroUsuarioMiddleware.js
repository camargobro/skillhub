import { Usuario } from "../models/modelUsuarios.js"
 
export async function atualizarEncontroUsuario(doc){
  try {
    await Usuario.findByIdAndUpdate(doc.usuarioSolicitante, { $push: { encontros: doc._id } });
    await Usuario.findByIdAndUpdate(doc.usuarioProvedor, { $push: { encontros: doc._id } }); 
  }catch(error) {
    console.log(error)
  }
}