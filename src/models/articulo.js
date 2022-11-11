const mongoose = require('mongoose');
// const articulo = require('./articulo');

const articuloSchema = new mongoose.Schema({
    carrito:{ type: mongoose.Schema.ObjectId, ref:"carritoCompras", required:true},
    producto:{type: mongoose.Schema.ObjectId, ref:"producto", required: true },
    cantidad:{type:Number,required:true },
},{
    timestamps: true,
    versionkey: false
});

module.exports = mongoose.model('articulo',articuloSchema);