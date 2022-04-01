
const jwt = require('jsonwebtoken')
const Usuario = require('./../models/usuario')


const validarJWT = async (req,res,next)=>{
    const token = req.header('x-token')
    if(!token){
        return res.status(401).json({
            msg:'No hay un token'
        })
    }
    try {
        const {uid} = jwt.verify(token, process.env.SECRETKEY)
        req.uid = uid
        //leer el usuario que correspone el uid
        const usuario = await Usuario.findById(uid)
        req.usuario = usuario
        
        if(!usuario){
            return res.status(401).json({
                msg:'usuario inexistente'
            })
        }

        //verfica si el uid tiene estado true
        if(!usuario.estado){
            return res.status(401).json({
                msg:'Token no valido'
            })
        }
        next()

    } catch (error) {
        return res.status(500).json({
            msg:'Ingrese un token valido'
        })    
    }
}

module.exports = {
    validarJWT
}