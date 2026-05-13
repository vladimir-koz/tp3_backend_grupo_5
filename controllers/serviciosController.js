const fs = require('fs/promises')
const path = require('path')

async function leerJson(nombreArchivo) {
  const filePath = path.join(__dirname, '..', 'data', nombreArchivo)
  const data = await fs.readFile(filePath, 'utf-8')

  return JSON.parse(data)
}

async function getServicios(req, res) {
  try {
    console.log('GET /servicios')

    const servicios = await leerJson('servicios.json')

    res.status(200).json(servicios)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      mensaje: 'Error al obtener los servicios'
    })
  }
}

async function getServicioDetalleById(req, res) {
  try {
    console.log(`GET /servicios/${req.params.id}`)

    const id = Number(req.params.id)
    
    const serviciosDetalles = await leerJson('serviciosDetalle.json')
    const detalle = serviciosDetalles.find((item) => item.id === id)
    

    if (!detalle) {
      return res.status(404).json({
        ok: false,
        mensaje: 'Servicio no encontrado'
      })
    }

    res.status(200).json(detalle)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      mensaje: 'Error al obtener el detalle del servicio'
    })
  }
}

module.exports = {
  getServicios,
  getServicioDetalleById
}