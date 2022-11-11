const ctrProducto ={};
const { json } = require('express');
const producto = require('../models/producto');
const tipo = require('../models/tipo')
ctrProducto.guardar = async (req, res) => {
    await producto
    .create(req.body)
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
ctrProducto.buscar = async(req,res) => {
    await producto
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 

ctrProducto.tipo = async(req,res) => {
    await tipo
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 

ctrProducto.buscarId = async(req,res) => {
    await producto
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 

ctrProducto.buscarNombre = async(req,res) => {
    let nom = req.params.nom
    await producto
    .find({nombre : RegExp(nom, 'i')})
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 
ctrProducto.actualizar = async(req, res) => {
    let{_id, ...body}=req.body;
    await producto
    .updateOne({_id: _id},{$set : body})//actualizar el primero que encuentre
    //.updateMany actualizar muchos
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
ctrProducto.borrar = async(req, res) => {
    await producto
    .deleteOne({_id: req.params.id})
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
module.exports = ctrProducto;