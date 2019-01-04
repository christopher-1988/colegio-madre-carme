function mv() {
    
    _.templateSettings = {
        interpolate: /\{\{\=(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g,
        escape: /\{\{\-(.+?)\}\}/g
                        } 

    
//----------------------------------------seo-----------------------------------------------------------
    var obj = {
                        seo: [
                                {descripcion:"En la U.E Colegio Padre Díaz,buscamos Formar jóvenes sólidamente preparados y comprometidos con el complejo mundo de hoy, brindando una educación de calidad, involucrando a todos los actores de la comunidad educativa",
                                 autor:"christopher "
                                ,keywords:"misión,visión,mision,U.E Colegio Padre Díaz,colegio padre diaz,colegiopadrediaz"
                                }
                            ]
                        };	
                         //console.log(obj)
                         // Obtenemos el HTML del template con jQuery y se lo pasamos
                         // a la funcion template de underscore para que la compile
                         var compilado = _.template($('#metmv').html());
                        // Ejecutamos la funcion compilado y le pasamos la colección
                        // que queremos que use y el HTML generado lo ponemos el DOM
                        // con jQuery
                        $('#meta').html( compilado(obj) );
    
//-------------------------------------cuerpo de la pagina-----------------------------------------------
    
       var obj = {
                        qs: [
                                {
                                 titulo:"Nuestra Misíon y Visíon",
                                 mision:"Formar jóvenes sólidamente preparados y comprometidos con el complejo mundo de hoy, brindando una educación de calidad, involucrando a todos los actores de la comunidad educativa.También se propone promover en sus estudiantes una escala de valores que le permita asumir su cultura en el marco de una visión amplia del mundo, con tolerancia y respeto.Mantenerse como Centro de referencia en el Municipio Crespo en materia educativa, social, religiosa y moral que garantice la participación de niños, niñas, adolescentes  y jóvenes en la formación y   consolidación de valores.Crear y propiciar en el colegio un ambiente grato, democrático y participativo que facilite en los padres, docentes, estudiantes, personal administrativo y obrero una atmósfera cálida que genere un alto sentido de pertenencia, acompañado de un compromiso de ayuda y solidaridad hacia el prójimo, como parte importante de todo ser humano, formado competentemente.",
                                    vision:"Ser un Centro de formación con una visión educativa, cuyos egresados reflejen, en su actuación, excelencia académica, personal y espiritual, que ayuden a la transformación de la realidad existente, mediante la promoción de valores éticos y morales, humano-cristianos, que permitan dar respuesta a las distintas necesidades de la sociedad."
                                }
                            ]
                        };	
                         //console.log(obj)
                         // Obtenemos el HTML del template con jQuery y se lo pasamos
                         // a la funcion template de underscore para que la compile
                         var compilado = _.template($('#containermv').html());
                        // Ejecutamos la funcion compilado y le pasamos la colección
                        // que queremos que use y el HTML generado lo ponemos el DOM
                        // con jQuery
                        $('#quienessomos').html( compilado(obj) );
//-------------------------------------config-----------------------------------------------
    
      

              
            
}