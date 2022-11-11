const express = require('express');
const router = express.Router();
const ctrArticulo = require('../controllers/ctrArticulo')
//Create
router.post('/articulo', ctrArticulo.guardar)

//Read
router.get('/articulo',ctrArticulo.buscar)

//Update
router.put('/articulo',ctrArticulo.actualizar)
// Eliminar
router.delete('/articulo/:id',ctrArticulo.eliminar)
//Buscar por nombre
router.get('/articulo/:car',ctrArticulo.buscarCarrito)
module.exports = router;