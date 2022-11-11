const express = require('express');
const router = express.Router();
const ctrComentario = require('../controllers/ctrComentario')

router.post('/comentario',ctrComentario.guardar);
router.get('/comentario',ctrComentario.buscar);
router.get('/comentario/:nom',ctrComentario.buscarNombre);
router.put('/comentario',ctrComentario.actualizar);
router.delete('/comentario/:id',ctrComentario.borrar);

//exportar la ruta
module.exports = router;