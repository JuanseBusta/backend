const ctrAdministrador ={};
const administrador = require('../models/administrador');

ctrAdministrador.guardar = async (req, res) => {
    await administrador
    .create(req.body)
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
ctrAdministrador.buscar = async(req,res) => {
    await administrador
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 
ctrAdministrador.buscarNombre = async(req,res) => {
    let nom = req.params.nom
    await administrador
    .find({nombre : RegExp(nom, 'i')})
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 
ctrAdministrador.actualizar = async(req, res) => {
    let{_id, ...body}=req.body;
    await administrador
    .updateOne({_id: _id},{$set : body})//actualizar el primero que encuentre
    //.updateMany actualizar muchos
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
ctrAdministrador.borrar = async(req, res) => {
    await administrador
    .deleteOne({_id: req.params.id})
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
module.exports = ctrAdministrador;