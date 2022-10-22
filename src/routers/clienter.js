const express = require('express');
const router = express.Router();
const cliente = require('../models/cliente')
router.get('/cliente',(req,res) =>{
    res.send('Ruta get cliente')
})

router.post('/cliente',(req,res) =>{
    cliente(req.body)
    .save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })
})

router.put('/cliente',(req,res) =>{
    res.send('Ruta put cliente')
})

router.delete('/cliente',(req,res) =>{
    res.send('Ruta delete cliente')
})

module.exports = router;