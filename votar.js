//llama los datos del formulario votar para luego cambiar el valor de este en la base de datos

function guardarvoto(){
	var proyectoencache = JSON.parse(localStorage.getItem('proyectoseleccionado'));
	proyectoencache[0].VOTOS.nombrevotante= document.getElementById("nombrevotante").value;
    proyectoencache[0].VOTOS.seccionvotante= document.getElementById("seccionvotante").value;
	proyectoencache[0].VOTOS.carnetvotante= document.getElementById("carnetvotante").value;

//modifica el dato de la base de dato con esto
    proyectoinstanciado.Modificar().then(function(response) {
  console.log("Success!", response);
            alert("Voto guardado");
            
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
            
});
} 
 