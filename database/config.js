const mongoose = require('mongoose')
//creamos la configuracion en bbdd
const dbConection =  () =>{
    try {
        //importamos de .env el uri de mongo
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('Conexion exitosa')    
    } catch (error) {
        throw new Error('Error en la conexion a base de datos')
    }
}

module.exports = {dbConection}