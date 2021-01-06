const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//app de express

const app = express();

// Cargar archivos estaticos

app.use(express.static('public'));

//Habilitar pug

app.set('view engine','pug');

// Añadir carpeta de vistas

app.set('views', path.join(__dirname,'./views'));

// Body parser para leer datos del formulario 

app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes());

//ruta para el home


app.listen(3000);
