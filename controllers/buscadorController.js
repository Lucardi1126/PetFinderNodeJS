exports.buscadorForm = (req, res)=>{
    res.render('index', {
        nombrePagina : 'PetFinder'
    });
}

exports.formularioBuscar = (req, res)=> {
    res.render('FormularioEncontrar', {
        nombrePagina: 'Encontrar'
    })
}
exports.formularioEnviar = (req, res)=> {
    // acceder a lo que el usuario escribe
    //console.log(req.body);

    // Validacion   
    const {nombre} = req.body;

    let errores = [];

    if (!nombre) {
        errores.push({'texto': 'Agrega un Nombre de Mascota'})
    }

    // Errores
    if(errores.length > 0){
        res.render('FormularioEncontrar', {nombrePagina : 'Buscar',
    errores})
    }
}