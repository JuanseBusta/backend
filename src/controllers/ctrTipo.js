const ctrTipo ={};
const tipo = require('../models/tipo');

ctrTipo.guardar = async (req, res) => {
    await tipo
    .create(req.body)
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
ctrTipo.buscar = async(req,res) => {
    await tipo
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 
ctrTipo.buscarNombre = async(req,res) => {
    let nom = req.params.nom
    await tipo
    .find({nombre : RegExp(nom, 'i')})
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 
ctrTipo.actualizar = async(req, res) => {
    let{_id, ...body}=req.body;
    await tipo
    .updateOne({_id: _id},{$set : body})//actualizar el primero que encuentre
    //.updateMany actualizar muchos
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
ctrTipo.borrar = async(req, res) => {
    await tipo
    .deleteOne({_id: req.params.id})
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
module.exports = ctrTipo;