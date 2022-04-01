const bcryptjs = require('bcryptjs')
const {generarJWT} = require('./../helpers/generarJWT')
const Usuario = require('./../models/usuario')


const login = async (req,res)=>{
    //destructuring
    const {correo, password} = req.body
    try {
        //buscamos si existe el usuario en bbdd
        const usuario = await Usuario.findOne({correo})
        //si no, devuelve error
        if(!usuario){
            return res.status(400).json({
                msg: 'Usuario inexistente'
            })
        }
        //sigue y valida el pass
        const validPassword = bcryptjs.compareSync(password, usuario.password)
        if(!validPassword){
            //si no es valido vuelve error
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
        return res.status(500).json({
            msg:'Contacte al administrador'
        })
    }
    
}
module.exports = {login}