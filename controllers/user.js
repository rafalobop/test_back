const bcryptjs = require('bcryptjs')

const obtenerUsuarios = (req,res)=>{
    res.json({
        msg:'Usuarios obtenidos'
    })
}
const crearUsuario = (req,res)=>{
 
    let {nombre, correo, password} = req.body
    password = bcryptjs.hashSync(password, 10)


    res.status(200).json({
        msg:'Usuario creado',
        usuario: {
            id,
            nombre,
            correo,
            password
        }
    })
}


module.exports = {
    obtenerUsuarios,
    crearUsuario
}