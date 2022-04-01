const {validationResult} = require('express-validator')

//usamos el express.validator y validamos los campos que llegan en la request
const validarCampos = (req,res, next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    next()
}

module.exports = {
    validarCampos
}