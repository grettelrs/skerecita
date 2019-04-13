var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080; //puerto para el servidor

mongoose.connect('mongodb://todos:todos123@ds017165.mlab.com:17165/cedesprimerproyecto'); //Conecta al servidor local con Mongo
//mongoose.connect('mongodb://bb-sita:pass123@ds341825.mlab.com:41825/cedespruebas');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.configure(function(){
	app.use(express.static(__dirname + '/'));
	app.use(express.logger('dev'));

	app.use(express.methodOverride());

});
var bodyParser= require('body-parser');
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true}));
require('./route.js')(app);

app.listen(port);
console.log("App por el puerto " + port);