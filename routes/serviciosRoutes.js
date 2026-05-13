const { Router } = require('express')
const {
  getServicios,
  getServicioDetalleById
} = require('../controllers/serviciosController')

const router = Router()

router.get('/', getServicios)
router.get('/:id', getServicioDetalleById)

module.exports = router
