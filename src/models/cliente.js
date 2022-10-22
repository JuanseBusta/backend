const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: {type:String, required:true},
    celular: {type:Number, default:300},
    email:{ type: String, required:true},
    nacimiento:{type:Date, default: Date.now()}
},{
    timestamps: true,
    versionkey: false
});

module.exports = mongoose.model('cliente',clienteSchema);