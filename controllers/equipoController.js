const fs = require('fs/promises')
const path = require('path')

async function getEquipo(req, res) {
  try {
    console.log('GET /equipo')

    const filePath = path.join(__dirname, '..', 'data', 'equipo.json')
    const data = await fs.readFile(filePath, 'utf-8')
    const equipo = JSON.parse(data)

    res.status(200).json(equipo)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      mensaje: 'Error al obtener el equipo'
    })
  }
}

module.exports = {
  getEquipo
}
