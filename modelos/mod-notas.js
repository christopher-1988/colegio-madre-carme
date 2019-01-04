function modnotas(sts) {
    
    _.templateSettings = {
        interpolate: /\{\{\=(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g,
        escape: /\{\{\-(.+?)\}\}/g
                        } 
    
    switch(sts){

        case "viewon":
                       
//-----------view clientes--------
            
            var op="viewon";
			$.ajax({
			// la URL para la petición
			url :'mod-server/mod-notas.php', 
			// la información a enviar,
			// especifica si será una petición POST o GET
            // la información a enviar
            data :{sts:op},
			type :'POST',
			async:true,			 
			// el tipo de información que se espera de respuesta
			dataType :'json',
			// código a ejecutar si la petición es satisfactoria;
			// la respuesta es pasada como argumento a la función
			success : function(data){			
  				obj={coll:data};
                console.log(data);
    
  				// verificar si un objeto javascript se encuentra vacío o no utilizando $.IsEmptyObject()
                if($.isEmptyObject(data)){

                 
                       $("#notas").append('<div class="col s12 m3"><div class="card deep-orange darken-2"><div class="card-content white-text"><span class="card-title"> : ( </span><p >No Existen publicaciones.</p></div></div></div>')
           
                      }else{
                          
                           
                           $("#preloader").fadeOut("fast","swing",function(){
                               $("#preloader").removeClass("progress")

                                  var compilado = _.template($('#menota').html());
                                 // Ejecutamos la funcion compilado y le pasamos la colección
                                 // que queremos que use y el HTML generado lo ponemos el DOM
                                 // con jQuery
                                 $('#notas').html( compilado(obj) );
                          });
                     }
                
                },				 
				// código a ejecutar si la petición falla;
				// son pasados como argumentos a la función
				// el objeto jqXHR (extensión de XMLHttpRequest), un texto con el estatus
				// de la petición y un texto con la descripción del error que haya dado el servidor
				error : function(jqXHR, status, error) 
				{
					$("#preloader").fadeOut("fast","swing",function(){
                               $("#preloader").removeClass("progress")

                                 $("#notas").append('<div class="col s12 m3"><div class="card deep-orange darken-2"><div class="card-content white-text"><span class="card-title"> : ( </span><p >Error con el Servidor.</p></div></div></div>')
                        
                          });
					     	 
				},		 
					// código a ejecutar sin importar si la petición falló o no
					complete : function(jqXHR, status)
				{

				}					
				
            });	//fin del metodo ajax jqurey
    
//------------------------------------------- view usuario-----------------------------
      break

      case "viewof":

        recarga(op);
            
      break;
    }//fin del switch
    
}

//----------------------------------- funcion view usuario-------------------------------------

function viewusu(op)
{
    
 $.ajax({
  
			// la URL para la petición
			url :'../mod-server/mod-notas.php', 
			// la información a enviar,
			// especifica si será una petición POST o GET
            // la información a enviar
            data :{sts:op},
			type :'POST',
			async:true,			 
			// el tipo de información que se espera de respuesta
			dataType :'json',
			// código a ejecutar si la petición es satisfactoria;
			// la respuesta es pasada como argumento a la función
			success : function(data){			
  				obj={coll:data};
                //console.log(obj);

  				// verificar si un objeto javascript se encuentra vacío o no utilizando $.IsEmptyObject()
                if($.isEmptyObject(data)){
                    
                $("#notas").append('<div class="col s12 m3"><div class="card deep-orange darken-2"><div class="card-content white-text"><span class="card-title"> : ( </span><p >No Existen publicaciones.</p></div></div></div>')
           
                }else{
                     console.log("repuesta server")
                     var compilado = _.template($('#scripnotaof').html());
                     // Ejecutamos la funcion compilado y le pasamos la colección
                     // que queremos que use y el HTML generado lo ponemos el DOM
                     // con jQuery
                     $('#divnotasof').html( compilado(obj) );
                }
                
                },				 
				// código a ejecutar si la petición falla;
				// son pasados como argumentos a la función
				// el objeto jqXHR (extensión de XMLHttpRequest), un texto con el estatus
				// de la petición y un texto con la descripción del error que haya dado el servidor
				error : function(jqXHR, status, error) 
				{
				    $("#preloader").fadeOut("fast","swing",function()
                    {
                        $("#preloader").removeClass("progress")
                        $("#notas").append('<div class="col s12 m3"><div class="card deep-orange darken-2"><div class="card-content white-text"><span class="card-title"> : ( </span><p >Error con el Servidor.</p></div></div></div>')
                        
                    });
					     	 
				},		 
					// código a ejecutar sin importar si la petición falló o no
				complete : function(jqXHR, status)
				{

				}					
				
            });	//fin del metodo ajax jqurey   
    
}

//-------------------------------funciones-------------------------------------
 function recarga(op)
            {
                  
              //setInterval(function()
                //{
                        var op="viewof";
                        viewusu(op)
                   // },10000);
              
            }   
