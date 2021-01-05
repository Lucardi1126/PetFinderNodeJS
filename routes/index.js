const express = require('express');
const router = express.Router();

//iportar el controlador 
const buscadorController = require('../controllers/buscadorController');

module.exports = function() {

    router.get('/', buscadorController.buscadorForm);
    
    router.get('/Contacto', (req, res)=> {
        res.send('Contacto');
    });
    return router;
}

//ruta para el home

