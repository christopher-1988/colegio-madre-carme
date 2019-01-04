// JavaScript Document 
function modconfig(control) {
 
 _.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g,
    escape: /\{\{\-(.+?)\}\}/g
  } 
 

//------------------------------------------------encabezado--------------------------------------------------------
var header= {
                
    header:[{imagen:"fotos_estrutura/logo.png",alt:"Sendero Artesanal",nombre:"Sendero Artesanal Agua Viva"}],                                               
				     };	
						
						// Obtenemos el HTML del template con jQuery y se lo pasamos
						// a la funcion template de underscore para que la compile
						var compilado = _.template($('#encabezado').html());
    
						// Ejecutamos la funcion compilado y le pasamos la colección
						// que queremos que use y el HTML generado lo ponemos el DOM
						// con jQuery
						$('#header').html( compilado(header) );    
 
//--------------------------------------pie de pagina---------------------------------------------------------------
var footer= {
                        developer:[{nombre:"christopher Carnevale"}],
						social:[
								{class:"icon-1", enlace:""},
                                {class:"icon-3", enlace:""}
                             	],                        
				     };	
						// Obtenemos el HTML del template con jQuery y se lo pasamos
						// a la funcion template de underscore para que la compile
						var compilado = _.template($('#piepagina').html());
    
						// Ejecutamos la funcion compilado y le pasamos la colección
						// que queremos que use y el HTML generado lo ponemos el DOM
						// con jQuery
						$('#footer').html( compilado(footer) );
    
//-----------------------------------------funciones----------------------------------------------------------------


};