const mongoose = require('mongoose');
const tipoSchema = new mongoose.Schema({
    nombre:{type: String},
    descripción:{type: String},
    
  },{
    timestamps: true,
    versionKey: false
  })

  module.exports = mongoose.model('tipo',tipoSchema);