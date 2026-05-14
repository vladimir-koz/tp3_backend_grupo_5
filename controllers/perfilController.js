const fs = require('fs/promises')
const path = require('path')

async function getPerfilById(req, res) {
  try {
    console.log(`GET /perfil/${req.params.id}`)

    const id = Number(req.params.id)
    const filePath = path.join(__dirname, '..', 'data', 'usuarios.json')
    const data = await fs.readFile(filePath, 'utf-8')
    const perfiles = JSON.parse(data)
    const perfil = perfiles.find((item) => item.id === id)

    if (!perfil) {
      return res.status(404).json({
        ok: false,
        mensaje: 'Perfil no encontrado'
      })
    }

    res.status(200).json(perfil)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      mensaje: 'Error al obtener el perfil'
    })
  }
}

module.exports = {
  getPerfilById
}
