
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios/'

        this.middlewares()
        this.routes()
    }

    routes(){
        this.app.use(this.usuariosPath, require('./../routes/user'))
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())



    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Corriendo en el puerto', this.port)
        })
    }

}

module.exports = Server