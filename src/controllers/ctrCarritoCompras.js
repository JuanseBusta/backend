const ctrCarritoCompras={};
const { json } = require('express');
const carritoCompras = require('../models/carritoCompras')

ctrCarritoCompras.guardar = (req,res)=>{
    carritoCompras
    .create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
ctrCarritoCompras.buscar = async(req,res)=>{
    await carritoCompras
    .find()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

ctrCarritoCompras.buscarNombre = async(req,res)=>{
    let nom = req.params.nom
    await carritoCompras
    .find({nombre:RegExp(nom,'i')})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
ctrCarritoCompras.actualizar = async(req,res)=>{
    let {_id,...body}=req.body;
    await carritoCompras
    .updateOne({_id:_id},{$set:body})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

ctrCarritoCompras.eliminar = async(req,res)=>{
    await carritoCompras
    .find()
    .deleteOne({_id: req.params.id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
module.exports = ctrCarritoCompras