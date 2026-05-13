require('dotenv').config()

const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()

    this.port = process.env.PORT || 3000

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    //aca van las rutas

    this.app.use((req, res) => {
      res.status(404).json({
        ok: false,
        mensaje: 'Ruta no encontrada'
      })
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`)
    })
  }
}

module.exports = Server
