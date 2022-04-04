
const jwt = require('jsonwebtoken')
const Usuario = require('./../models/usuario')


const validarJWT = async (req,res,next)=>{
    
    //colocamos el header    
    const token = req.header('Authorization')

    if(!token){
        //devuelve error si falla el token
        return res.status(401).json({
            msg:'Debe logearse para verificar el token de usuario.'
        })
    }
    try {
        //extrae el id para buscarlo en bbdd
        const {uid} = jwt.verify(token, process.env.SECRETKEY)
        req.uid = uid
        const usuario = await Usuario.findById(uid)
        req.usuario = usuario
        if(!usuario){
            //si falla no existe el usuario
            return res.status(401).json({
                msg:'usuario inexistente'
            })
        }
        next()
    } catch (error) {
        //si falla retorna el error
        return res.status(500).json({
            msg:'Ingrese un token valido'
        })    
    }
}

module.exports = {
    validarJWT
}