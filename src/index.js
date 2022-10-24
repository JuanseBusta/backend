require("dotenv").config();
require('./database');
const express = require('express');
const app = express();
const port = 9000;



app.use(express.json())
// Rutas
app.use('/', require('./routers/clienter'));

app.listen(port,(req,res) => {
    console.log('Hola, el servidor está en linea')
})