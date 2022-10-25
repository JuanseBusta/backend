const ctrCliente={};
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

ctrCliente.buscarNombre = async(req,res)=>{
    let nom = req.params.nom
    await cliente
    .find({nombre:RegExp(nom,'i')})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
ctrCliente.actualizar = async(req,res)=>{
    let {_id,...body}=req.body;
    await cliente
    .updateOne({_id:_id},{$set:body})
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