require("dotenv").config();
require('./database');
const cors = require ('cors')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json())
app.use(cors())
// Rutas
app.use('/', require('./routers/clienterouter'));
app.use('/', require('./routers/articulorouter'));
app.use('/', require('./routers/carritoComprasrouter'));
app.use('/', require('./routers/rutaProducto'));

app.listen(PORT,(req,res) => {
    console.log('Hola, el servidor está en linea')
})