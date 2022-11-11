const express = require('express');
const router = express.Router();
const ctrTipo = require('../controllers/ctrTipo')

router.post('/tipo',ctrTipo.guardar);
router.get('/tipo',ctrTipo.buscar);
router.get('/tipo/:nom',ctrTipo.buscarNombre);
router.put('/tipo',ctrTipo.actualizar);
router.delete('/tipo/:id',ctrTipo.borrar);

//exportar la ruta
module.exports = router;