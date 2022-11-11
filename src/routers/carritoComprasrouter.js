const express = require('express');
const router = express.Router();
const ctrCarritoCompras = require('../controllers/ctrCarritoCompras')
//Create
router.post('/carritoCompras', ctrCarritoCompras.guardar)

//Read
router.get('/carritoCompras',ctrCarritoCompras.buscar)

//Update
router.put('/carritoCompras',ctrCarritoCompras.actualizar)
// Eliminar
router.delete('/carritoCompras/:id',ctrCarritoCompras.eliminar)
//Buscar por nombre
router.get('/carritoCompras/:nom',ctrCarritoCompras.buscarNombre)
module.exports = router;