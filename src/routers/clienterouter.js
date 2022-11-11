const express = require('express');
const router = express.Router();
const ctrCliente = require('../controllers/ctrCliente')
//Create
router.post('/cliente', ctrCliente.guardar)

//Read
router.get('/cliente',ctrCliente.buscar)

//Update
router.put('/cliente',ctrCliente.actualizar)
// Eliminar
router.delete('/cliente/:id',ctrCliente.eliminar)
//Buscar por nombre
router.get('/cliente/:nom',ctrCliente.buscarNombre)
module.exports = router;