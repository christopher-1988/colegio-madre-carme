function modseo(control) {
    
    _.templateSettings = {
        interpolate: /\{\{\=(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g,
        escape: /\{\{\-(.+?)\}\}/g
                        } 
 
switch (control) {
  case "home":
       var obj = {
                        seo: [
                                {descripcion:"En la U.E Colegio San Pedro, brindando una educación de calidad, involucrando a todos los actores de la comunidad ",
                                 autor:"christopher "
                                ,keywords:"barquisimeto,Barquisimeto edo lara,u.e colegio padre diaz,u.e,colegio padre diaz,colegio padre diaz,excelencia,eduacion primaria, eduacion basica,colegio, INSTRUIR EDUCANDO,instruir educando,colegio,Colegio"
                                }
                            ]
                        };	
                         //console.log(obj)
                         // Obtenemos el HTML del template con jQuery y se lo pasamos
                         // a la funcion template de underscore para que la compile
                         var compilado = _.template($('#metahome').html());
                        // Ejecutamos la funcion compilado y le pasamos la colección
                        // que queremos que use y el HTML generado lo ponemos el DOM
                        // con jQuery
                        $('#meta').html( compilado(obj) );

    break;

    }
                    
            
}