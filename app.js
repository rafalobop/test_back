require('dotenv').config()
const Server = require('./models/server')
//creamos una instancia de server con un server en clase
const server = new Server()

server.listen()