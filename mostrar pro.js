//esta función es para que se muestre la lista de los proyectos que se encuentren en la base de datos
    function mostrarproyecto(){
      var proyectoinstanciado = new _Expo();

      proyectoinstanciado.Seleccionartodos().then(function(response){
         for(var ele in response){
          document.getElementById('proyecticos').innerHTML += "<tr><td>" + 
          response[ele].NOMBRE + "</td><td>" +
          response[ele].MIEMBRO1 + "<br>" +
          response[ele].MIEMBRO2+ "<br>" +
          response[ele].MIEMBRO3+ "</td><td>" +
          response[ele].GRADO+ "</td><td>" +
          response[ele].TEMATICA+ "</td><td>" +
          response[ele].DESCRIPCION+ "</td><td> <img src= '"+
          response[ele].IMAGEN+ " 'width = '50px' height = '50px'/></td><td>"  +
          response[ele].VOTOS+ "<br>" + "<button onclick='votar()'>votar</button>"+"</td></tr>";
         }

 }, function(error){
      console.error("Failed!", error);
      alert("error" + error);
      });
    }

function votar(id){

             let claseproyectoinstanciado = new _Expo(id);
               claseproyectoinstanciado.Seleccionarporid().then(function(response) {

               localStorage.setItem("proyectoseleccionado",JSON.stringify(response));
                   location.href="votar por proyecto.html"
                 },
                    function(error) {
                      console.log(error);
                    });
 }