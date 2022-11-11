const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://Juanse:251214@cluster0.siftvpy.mongodb.net/petshop?retryWrites=true&w=majority"
)

.then(db=> console.log('Conectó con la base de datos'))
.catch(err=> console.log('Erró al conectar'+err))