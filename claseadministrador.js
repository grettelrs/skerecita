//la clase que determina los parámetros de los administradores
class _adm {
   constructor(_ID, _NOMBRE, _CLAVE, _EMAIL, _ESTADO, _IMAGEN) {
     this._ID = _ID;
     this._NOMBRE=_NOMBRE ;
     this._CLAVE=_CLAVE;
     this._EMAIL=_EMAIL;
     this._ESTADO= _ESTADO;
     this._IMAGEN = _IMAGEN;
        
   }
Guardar() {
   var objetoaenviar = this;

  return new Promise(function(resolve, reject) {

       
      try {
               var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/nuevoadm');
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
    

    
    Login() {
         var objetoaenviar = this;
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
      
      try {
           var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/loginadm');
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
//función que guarda los datos del admin
function guardaradmin1(){
let admactual = new _adm('0',
        document.getElementById("nombre").value,
              document.getElementById("clave").value,
              document.getElementById("email").value,
              document.getElementById("estado").value,
      /*imagenenbase64*/
        
        );
        admactual.Guardar(admactual).then(function(response) {
  console.log("Success!", response);
            alert("Guardado con éxito");

}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
             
});
}

//función que compara los datos existentes del admin con los ingresados
function ingreso1(){
  let admactual = new _adm('0',
        "",
              document.getElementById("clavelogin").value,
              document.getElementById("emaillogin").value,
              "",
      ""
        
        );
        admactual.Login().then(function(response) {
  console.log("Success!", response);
            alert("login con éxito");
            localStorage.getItem('Usuariologeado',JSON.stringify(response));
            location.href="index.html";
          
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
               
});
}