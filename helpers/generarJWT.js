const jwt = require('jsonwebtoken')

const generarJWT = (uid)=>{
    //promesa para generar el jwt
    return new Promise((resolve, reject)=>{

        const payload = {uid}
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn:'1h'
        }, (err, token)=>{
            if(err){
                reject('No se pudo generar token')
            }else{
                //si no falla, devuelve el token
                resolve(token)
            }
        })

    })
}

module.exports = {
    generarJWT
}