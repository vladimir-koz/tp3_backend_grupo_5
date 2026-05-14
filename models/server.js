require('dotenv').config()

const express = require('express')
const cors = require('cors')
const serviciosRoutes = require('../routes/serviciosRoutes')
const equipoRoutes = require('../routes/equipoRoutes')
const perfilRoutes = require('../routes/perfilRoutes')
const authRoutes = require('../routes/authRoutes')

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
    this.app.get('/', (req, res) => {
      res.status(200).json({
        ok: true,
        mensaje: 'API Aurum Motors funcionando'
      })
    })

    this.app.use('/servicios', serviciosRoutes)
    this.app.use('/equipo', equipoRoutes)
    this.app.use('/perfil', perfilRoutes)
    this.app.use('/login', authRoutes)
    
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
