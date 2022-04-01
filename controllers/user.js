const bcryptjs = require('bcryptjs')
const Usuario = require('./../models/usuario')


const crearUsuario = async (req,res)=>{
    //destructuramos el body de la req
    let {nombre, correo, password} = req.body
    //creamos el objeto en bbdd
    const usuario = new Usuario({nombre, correo, password})
    //encriptamos contraseña
    usuario.password = bcryptjs.hashSync(password, 10)
    //guardamos en bbdd
    await usuario.save()

    //devolvemos resp
    res.status(200).json({
        msg:'Usuario creado',
        usuario
    })
}


module.exports = {
    crearUsuario
}