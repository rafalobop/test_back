
const express = require('express')
const cors = require('cors')
const {dbConection} = require('./../database/config.js')

//creamos un modelo de server donde colocamos todo lo que necesitamos en el servidor
class Server {
    /* instanciamos el constructor y ahi llamamos puerto, app de express,
    path de rutas y las funciones que debe ejecutar el server. */
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
    //conectamos a la base de datos
    async conectarDb(){
        await dbConection()
    }
    //funcion para las rutas
    routes(){
        this.app.use(this.usuariosPath, require('./../routes/user'))
        this.app.use(this.authPath, require('./../routes/login.js'))
        this.app.use(this.jsonPlaceHolderPath, require('./../routes/jsonplaceholder'))
        
    }
    //funcion para middlewares
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    //server listen
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Corriendo en el puerto', this.port)
        })
    }
}

module.exports = Server