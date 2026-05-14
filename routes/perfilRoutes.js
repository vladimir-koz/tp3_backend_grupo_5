const { Router } = require('express')
const { getPerfilById } = require('../controllers/perfilController')

const router = Router()

router.get('/:id', getPerfilById)

module.exports = router
