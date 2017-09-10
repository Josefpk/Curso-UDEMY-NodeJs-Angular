'use strict'

const express = require('express');

var app = express();

// aqui se crea el servidor... se pasa como primer parametro el pueto
// Segundo parametro recibe una funcion de Calback
app.listen(3678, function(){
	console.log('API REST FAVORITOS FUNCIONANDO EN http://localhost:3678');
});	