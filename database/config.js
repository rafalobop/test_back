const mongoose = require('mongoose')

const dbConection =  () =>{
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('Conexion exitosa')    
    } catch (error) {
        console.log('er', error)
        throw new Error('Error en la conexion a base de datos')
    }
}

module.exports = {dbConection}