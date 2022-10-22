const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_URI)

.then(db=> console.log('Conectó con la base de datos'))
.catch(err=> console.log('Erró al conectar'+err))