const mongoose = require('mongoose');
// const carritoCompras = require('./carritoCompras');

const carritoComprasSchema = new mongoose.Schema({
    nombre: {type:String, required:true},
    fecha: {type:Date, default:Date.now()},
    carritoCliente:{ type: mongoose.Schema.ObjectId, ref:"carritoCompras", required:true},
    nombreCliente:{type: mongoose.Schema.ObjectId, ref:"cliente", required: true },
    direccionCliente:{type:mongoose.Schema.ObjectId, ref:"cliente",required:true },
    pagado:{type:Boolean, required:true}
},{
    timestamps: true,
    versionkey: false
});

module.exports = mongoose.model('carritoCompras',carritoComprasSchema);

