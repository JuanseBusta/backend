const express = require('express');
const router = express.Router();
const ctrAdministrador = require('../controllers/ctrAdministrador')

router.post('/administrador',ctrAdministrador.guardar);
router.get('/administrador',ctrAdministrador.buscar);
router.get('/administrador/:nom',ctrAdministrador.buscarNombre);
router.put('/administrador',ctrAdministrador.actualizar);
router.delete('/administrador/:id',ctrAdministrador.borrar);

//exportar la ruta
module.exports = router;