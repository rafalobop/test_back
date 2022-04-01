const bcryptjs = require('bcryptjs')
const {generarJWT} = require('./../helpers/generarJWT')
const Usuario = require('./../models/usuario')


const login = async (req,res)=>{
    
    const {correo, password} = req.body
    try {
        const usuario = await Usuario.findOne({correo})
        if(!usuario){
            return res.status(400).json({
                msg: 'Usuario inexistente'
            })
        }
        
        const validPassword = bcryptjs.compareSync(password, usuario.password)
        if(!validPassword){
            return res.status(400).json({
                msg: 'Password incorrecto'
            })
        }
        //generar el jwt
        const token = await generarJWT(usuario.id)


        res.status(200).json({
            msg:'Logeo exitoso',
            usuario,
            token
        })    
    } catch (error) {
        console.log('err', error)
        return res.status(500).json({
            msg:'Contacte al administrador'
        })
    }
    
}
module.exports = {login}