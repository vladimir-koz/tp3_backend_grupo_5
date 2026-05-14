const fs = require('fs/promises')
const path = require('path')

async function login(req, res) {
  try {
    console.log('POST /login')

    const { usuario, password } = req.body
    const filePath = path.join(__dirname, '..', 'data', 'usuarios.json')
    const data = await fs.readFile(filePath, 'utf-8')
    const usuarios = JSON.parse(data)
    const usuarioEncontrado = usuarios.find((item) => {
      return item.usuario === usuario && item.password === password
    })

    if (!usuarioEncontrado) {
      return res.status(401).json({
        ok: false,
        mensaje: 'Usuario o password incorrectos'
      })
    }
    
    res.status(200).json({
      ok: true,
      mensaje: 'Login correcto',
      perfil: usuarioEncontrado
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      mensaje: 'Error al iniciar sesion'
    })
  }
}

module.exports = {
  login
}
