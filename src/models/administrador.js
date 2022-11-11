const mongoose = require('mongoose');
const administradorSchema = new mongoose.Schema({
    idAdmin:{type: String, requiered: true},
    nombre:{type: String, requiered: true},
    usuario:{type: String, requiere: true},
    contraseña:{type: String, requiered: true},
    foto:{type: String, requiered: true},
  },{
    timestamps: true,
    versionKey: false
  })

  module.exports = mongoose.model('administrador',administradorSchema);