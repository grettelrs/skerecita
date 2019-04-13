var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var expo = new Schema( {
	//molde
	NOMBRE: String,
	MIEMBRO1: String,
	MIEMBRO2: String,
	MIEMBRO3: String,
	GRADO: Number,
	TEMATICA: String,
	DESCRIPCION: String,
	IMAGEN: String,
	VOTOS: Number
});
//base de datos que se crea
module.exports = mongoose.model('Proyecto',expo);
