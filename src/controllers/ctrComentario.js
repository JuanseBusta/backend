const ctrComentario ={};
const comentario = require('../models/comentario');

ctrComentario.guardar = async (req, res) => {
    await comentario
    .create(req.body)
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
ctrComentario.buscar = async(req,res) => {
    await comentario
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 
ctrComentario.buscarNombre = async(req,res) => {
    let nom = req.params.nom
    await comentario
    .find({nombre : RegExp(nom, 'i')})
    .then(data => res.json(data))
    .catch(err => res.json(err))
} 
ctrComentario.actualizar = async(req, res) => {
    let{_id, ...body}=req.body;
    await comentario
    .updateOne({_id: _id},{$set : body})//actualizar el primero que encuentre
    //.updateMany actualizar muchos
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
ctrComentario.borrar = async(req, res) => {
    await comentario
    .deleteOne({_id: req.params.id})
    .then(data =>res.json(data))
    .catch(err => res.json(err))
} 
module.exports = ctrComentario;