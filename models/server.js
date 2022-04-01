
const express = require('express')
const cors = require('cors')
const {dbConection} = require('./../database/config.js')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios/'
        this.authPath = '/api/login/'
        this.jsonPlaceHolderPath = '/api/getData'

        this.conectarDb()
        this.middlewares()
        this.routes()
    }
    async conectarDb(){
        await dbConection()
    }
    routes(){
        this.app.use(this.usuariosPath, require('./../routes/user'))
        this.app.use(this.authPath, require('./../routes/login.js'))
        this.app.use(this.jsonPlaceHolderPath, require('./../routes/jsonplaceholder'))
        
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