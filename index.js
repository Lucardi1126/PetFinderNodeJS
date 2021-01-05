const express = require('express');
const routes = require('./routes');
const path = require('path');

//app de express

const app = express();

// Cargar archivos estaticos

app.use(express.static('public'));

//Habilitar pug

app.set('view engine','pug');

// Añadir carpeta de vistas

app.set('views', path.join(__dirname,'./views'));


app.use('/', routes());

//ruta para el home


app.listen(3000);
