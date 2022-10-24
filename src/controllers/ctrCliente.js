const ctrCliente={}
const { json } = require('express');
const cliente = require('../models/cliente')

ctrCliente.guardar = (req,res)=>{
    cliente
    .create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
ctrCliente.buscar = async(req,res)=>{
    await cliente
    .find()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

ctrCliente.eliminar = async(req,res)=>{
    await cliente
    .find()
    .deleteOne({_id: req.params.id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
module.exports = ctrCliente