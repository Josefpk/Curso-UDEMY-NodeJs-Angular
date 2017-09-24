'use strict'
//CREAR CONTROLADOR

function prueba(req, res) {

	if (req.params.nombre){
		var nombre = req.params.nombre;
	}else{
		var nombre = "SIN NOMBRE";
	}
	
	res.send({texto: "Hola mundo con NodeJs y EXPRESS - "+nombre})
}

module.exports = {
	prueba
}