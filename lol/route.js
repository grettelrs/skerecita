var expocontroler = require('./expocontroler.js');
module.exports = function(app){
	var claseexpo = new expocontroler();
	app.post('/api/Nuevoproyecto', claseexpo.Guardar);
	app.post('/api/Modificaproyecto', claseexpo.Modificar);
	app.post('/api/Eliminaproyecto', claseexpo.Eliminar);
	app.post('/api/seleccionartodos', claseexpo.Seleccionartodos);
	app.post('/api/seleccionarportematica', claseexpo.Seleccionarportematica);
	app.post('/api/seleccionarporid', claseexpo.Seleccionarporid);
	app.post('/api/seleccionarpornombre', claseexpo.Seleccionarpornombre);

	app.get('*', function(req,re) {//localhost:8080

		res.sendfile('./login.html'); //carga única de la vista
	});
};
