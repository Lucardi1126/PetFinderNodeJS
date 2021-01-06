const { Router } = require('express');
const express = require('express');
const router = express.Router();

//iportar el controlador 
const buscadorController = require('../controllers/buscadorController');

module.exports = function() {
 
    
    router.get('/', buscadorController.buscadorForm);
    router.get('/buscar-mascota', buscadorController.formularioBuscar);
    router.post('/buscar-mascota', buscadorController.formularioEnviar);

    return router;
}

//ruta para el home

