const bcryptjs = require('bcryptjs')
const Usuario = require('./../models/usuario')


const crearUsuario = async (req,res)=>{
 
    let {nombre, correo, password} = req.body
    const usuario = new Usuario({nombre, correo, password})
    usuario.password = bcryptjs.hashSync(password, 10)
    await usuario.save()


    res.status(200).json({
        msg:'Usuario creado',
        usuario
    })
}


module.exports = {
    crearUsuario
}