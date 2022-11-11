const mongoose = require('mongoose');
const tipoSchema = new mongoose.Schema({
    nombre:{type: String, requiered: true},
    descripción:{type: String},
    
  },{
    timestamps: true,
    versionKey: false
  })

  module.exports = mongoose.model('tipo',tipoSchema);