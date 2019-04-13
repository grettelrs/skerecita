//
var Item = require('./agregar proyecto');
module.exports = class _Expo {
   constructor( ) {

   }
Guardar(req,res) {
	Item.create(
			{
    NOMBRE: req.body.NOMBRE,
    MIEMBRO1: req.body.MIEMBRO1,
    MIEMBRO2: req.body.MIEMBRO2,
    MIEMBRO3: req.body.MIEMBRO3,
    GRADO: req.body.GRADO,
    TEMATICA: req.body.TEMATICA,
    DESCRIPCION: req.body.DESCRIPCION,
    IMAGEN: req.body.IMAGEN
            }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
    
 Modificar(req,res) {
		Item.update( {_id : req.body._id},
					{$set:
			{
    NOMBRE: req.body.NOMBRE,
    MIEMBRO1: req.body.MIEMBRO1,
    MIEMBRO2: req.body.MIEMBRO2,
    MIEMBRO3: req.body.MIEMBRO3,
    GRADO: req.body.GRADO,
    TEMATICA: req.body.TEMATICA,
    DESCRIPCION: req.body.DESCRIPCION,
    IMAGEN: req.body.IMAGEN
            }}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}   
    
    Eliminar(req,res) {
	Item.remove({_id : req.body.id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);
    
    
    
}
    
    Seleccionarportematica(req,res) {
	Item.find({TEMATICA:req.body.TEMATICA}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) {
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) {
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
}