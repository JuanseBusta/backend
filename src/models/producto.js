const mongoose = require('mongoose');
const productoSchema = new mongoose.Schema({
    nombre:{type: String, requiered: true},
    tipo:{type: mongoose.Types.ObjectId},
    precio:{type: Number, default: 300},
    descripcion:{type: String, requiered: true},
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('producto',productoSchema);
