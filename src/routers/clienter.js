const express = require('express');
const router = express.Router();
const ctrCliente = require('../controllers/ctrCliente')
//Create
router.post('/cliente', ctrCliente.guardar)

//Read
router.get('/cliente',ctrCliente.buscar)

//Update
router.put('/cliente',(req,res) =>{
    res.send('Ruta put cliente')
})
// Eliminar
router.delete('/cliente/:id',ctrCliente.eliminar)

module.exports = router;