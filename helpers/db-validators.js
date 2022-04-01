const Usuario = require('./../models/usuario')

const verificaExisteMail = async (correo="")=>{
    const existeMail = await Usuario.findOne({correo})
    if(existeMail){
        throw new Error("Ya existe un usuario con ese correo")
    }
}


module.exports = { verificaExisteMail}