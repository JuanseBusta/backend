const express = require('express');
const router = express.Router();
const ctrProducto = require('../controllers/ctrProducto')

router.post('/producto',ctrProducto.guardar);
router.get('/producto',ctrProducto.buscar);
router.put('/producto',ctrProducto.actualizar);
router.delete('/producto/:id',ctrProducto.borrar);

router.get('/producto/nombre/:nom',ctrProducto.buscarNombre);
router.get('/producto/tipo',ctrProducto.tipo);
router.get('/producto/id/:id',ctrProducto.buscarId);

//exportar la ruta
module.exports = router;


//app.get('/producto/');//solicitar
//app.post('/producto/');//enviar info que queremos guardar en base de datos
//app.put('/producto/');//actualizar
//app.delete('/producto/');//eliminar