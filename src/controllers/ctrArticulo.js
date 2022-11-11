const ctrArticulo={};
const { json } = require('express');
const articulo = require('../models/articulo')

ctrArticulo.guardar = (req,res)=>{
    articulo
    .create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
ctrArticulo.buscar = async(req,res)=>{
    await articulo
    .find()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

ctrArticulo.buscarCarrito = async(req,res)=>{
    let car = req.params.nom
    await articulo
    .find({carrito:RegExp(car,'i')})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
ctrArticulo.actualizar = async(req,res)=>{
    let {_id,...body}=req.body;
    await articulo
    .updateOne({_id:_id},{$set:body})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

ctrArticulo.eliminar = async(req,res)=>{
    await articulo
    .find()
    .deleteOne({_id: req.params.id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
module.exports = ctrArticulo