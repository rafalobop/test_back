const {Schema, model} = require('mongoose')

const usuarioSchema = Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true, 'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'El password es obligatorio']
    },
})

module.exports = model('Usuario', usuarioSchema)
