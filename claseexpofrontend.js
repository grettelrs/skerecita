//principal clase tiene la mayoría de funciones que se usan en los archivos.
class _Expo{
	constructor(
	_id, NOMBRE, MIEMBRO1, MIEMBRO2, MIEMBRO3, GRADO, TEMATICA, DESCRIPCION, IMAGEN, VOTOS){
	this._id=_id;
	this.NOMBRE=NOMBRE;
	this.MIEMBRO1=MIEMBRO1;
	this.MIEMBRO2=MIEMBRO2;
	this.MIEMBRO3=MIEMBRO3;
	this.GRADO=GRADO;
	this.TEMATICA=TEMATICA;
	this.DESCRIPCION=DESCRIPCION;
	this.IMAGEN=IMAGEN;
  this.VOTOS=VOTOS;
	}
//establce como se guardan los proyectos
	Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
       var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://nubivagant-uwu.herokuapp.com/api/Nuevoproyecto');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};

xhr.send(JSON.stringify(objetoaenviar));     
          
}
catch(err) {
     reject(err.message);

  }
    });
}
    
 Modificar() {
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://nubivagant-uwu.herokuapp.com/api/Modificaproyecto');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}   
    
    Eliminar() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://nubivagant-uwu.herokuapp.com/api/Eliminaproyecto');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
Seleccionartodos() {
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://nubivagant-uwu.herokuapp.com/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarportematica() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://nubivagant-uwu.herokuapp.com/api/seleccionarportematica');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporid(req,res) {
	
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://nubivagant-uwu.herokuapp.com/api/seleccionarporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
    
    Seleccionarpornombre(req,res) {

    
    
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://nubivagant-uwu.herokuapp.com/api/seleccionarpornombre');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
}
//convierte la imagen que estaba guardada en texto a imagen.
             let imagenenbase64 = "";
      $("#img").change(function(){
       readURL(this);
 });
    
        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }

//función usada en el boton que guarda los diferentes datos del proyecto
function botonguardarclick1()
            {
              //agarrra los valores del formulario que van a ser almacenados en la base de datos
                var proyectoinstanciado = new _Expo(0,
                  document.getElementById("Nombre").value,
                  document.getElementById("miembro1").value,
                  document.getElementById("miembro2").value,
                  document.getElementById("miembro3").value,
                  document.getElementById("grado").value,
                  document.getElementById("tematica").value,
                  document.getElementById("descripcion").value,
                  imagenenbase64,
                  document.getElementById("votos").value
                 );
                //llama el parametro guardar para que esos datos se almacenen en la base de datos                            
                proyectoinstanciado.Guardar().then(function(response){
                  console.log("Success!", response);
                  alert("Guardado con éxito");
                }, function(error){
                  console.error("Failed!",error);
                  alert("Error" + error);
                });                                        
                                                        
            }