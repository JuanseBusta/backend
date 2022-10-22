const express = require('express');

const app = express();
require("dotenv").config();
require('./database');

require('./models/cliente')
const port = 9000;
const cliente = require('./routers/clienter');
app.use(express.json())
//RUTAS
app.use('/',cliente);


app.listen(port,(req,res) => {
    console.log('Hola, el servidor está en linea')
})