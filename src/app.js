const express = require("express");
const app = express()
const path = require("path");

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

// sistema de ruteo------------------------------
// const rutasLogin = require('./routes/login.js');
// const rutasRegister = require('./routes/register.js');
const rutasUser = require('./routes/users.js');
const rutasProductos = require('./routes/productos.js');
// const rutasMain = require('./routes/main.js')

// app.use('/login', rutasLogin);
// app.use('/register', rutasUser);
app.use('/', rutasUser);
app.use('/productos', rutasProductos);
// ----------------------------------------------



app.listen(process.env.PORT || 3020, ()=> console.log("Corriendo server 3020"));

