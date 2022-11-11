const mongoose = require('mongoose');
const comentarioSchema = new mongoose.Schema({
    cliente:{type: String, requiered: true},
    producto:{type: String, requiered: true},
    calificacion:{type: Number, default: 10},
    fecha:{type: Date, requiered: true},
    contenido:{type: String, requiered: true},
  },{
    timestamps: true,
    versionKey: false
  })

  module.exports = mongoose.model('comentario',comentarioSchema);