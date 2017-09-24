'use strict'

const express = require('express');

//BODY PARSER, convierto todo lo que llegue como parametro a JSON
const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3678;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//function () va ahcer igua a () =>
app.get('/prueba/:nombre?', (req, res) =>{

	if (req.params.nombre){
		var nombre = req.params.nombre;
	}else{
		var nombre = "SIN NOMBRE";
	}
	
	res.send({texto: "Hola mundo con NodeJs y EXPRESS - "+nombre})
});

// aqui se crea el servidor... se pasa como primer parametro el pueto
// Segundo parametro recibe una funcion de Calback
app.listen(port, function(){
	console.log(`API REST FAVORITOS FUNCIONANDO EN http://localhost:${port}`);
	console.log('Prueba demonio');
});	