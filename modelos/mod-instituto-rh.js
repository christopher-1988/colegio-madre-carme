function rh() {
    
    _.templateSettings = {
        interpolate: /\{\{\=(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g,
        escape: /\{\{\-(.+?)\}\}/g
                        } 

    
//----------------------------------------seo-----------------------------------------------------------
    var obj = {
                        seo: [
                                {descripcion:"La historia del Colegio Padre Díaz, comienza en el año 1779, cuando el Obispo de Caracas y Venezuela, Mariano Martí, en una de sus visitas pastorales, mandó a todos los curas párrocos se fundara una escuela parroquial para párvulos",
                                 autor:"christopher "
                                ,keywords:"duaca,reseña historia,resena historia,U.E Colegio Padre Díaz,colegio padre diaz,colegiopadrediaz"
                                }
                            ]
                        };	
                         //console.log(obj)
                         // Obtenemos el HTML del template con jQuery y se lo pasamos
                         // a la funcion template de underscore para que la compile
                         var compilado = _.template($('#metrh').html());
                        // Ejecutamos la funcion compilado y le pasamos la colección
                        // que queremos que use y el HTML generado lo ponemos el DOM
                        // con jQuery
                        $('#meta').html( compilado(obj) );
    
//-------------------------------------cuerpo de la pagina-----------------------------------------------
    
       var obj = {
                        rh: [
                                {
                                 historia1:"La historia del Colegio “Padre Díaz”, comienza en el año 1779, cuando el Obispo de Caracas y Venezuela, Mariano Martí, en una de sus visitas pastorales, mandó a todos los curas párrocos se fundara una escuela parroquial para párvulos.",
                                 historia2:"En diciembre de 1870 llega a Duaca el PADRE VIRGILIO DÍAZ como cura párroco de la IGLESIA SAN JUAN BAUTISTA. Desde esa fecha, y durante treinta años que duró su permanencia, dirigió varias iniciativas que contribuyeron al bienestar social, económico y cultural; cabe destacar que, este sacerdote restauró la escuela que desde años atrás estaba cesante, creando dos turnos: diurno y nocturno.En estos años quienes daban clases eran el PADRE DÍAZ y Don Fermín Manzanares, sin remuneración alguna. Hasta 1900, el Padre Virgilio Díaz dirigió la escuela parroquial, posteriormente fue trasladado hacia Barquisimeto.",
                                 historia3:"Entre 1900 y 1921, la información que se pudo recopilar es que fue dirigida  por el Padre Quintana, quien decidió dejarla solo nocturna y denominarla Escuela Parroquial Nocturna “Padre Díaz”, en homenaje a su antecesor y benefactor de Duaca, el Padre Virgilio Díaz y con este nombre fue inscrita el 11 de julio de 1924 en el Ministerio de Educación, según Gaceta oficial Nº 15336 de fecha 12 de julio de mismo año.",
                                historia4:"En las mismas condiciones la encuentra el PADRE ORENI, quien llega a Duaca en el año 1927. Dieciséis años después, en el año 1943, solicitó al Ministerio de Educación que cambiara la escuela de nocturna a diurna y en fecha 15 de diciembre del mismo año, recibiría el Padre Oreni la respuesta a su petición con fecha de octubre del año 1943 mediante Resolución 919, quedando inscrita oficialmente. Se deduce que la solicitud hecha por el Padre Oreni fue atendida y la ESCUELA PARROQUIAL PADRE DÍAZ se convirtió en Diurna. Sucesivamente, en los años posteriores siguió inscrita en el Ministerio de Educación Nacional con la categoría privada. .",
                                historia5:"En el año 1954  por razones de edad y quebranto de salud física del Padre Oreni, el Sr. Obispo de la Diócesis Barquisimetana, Monseñor Críspulo Benítez Fonturvel, decidió enviarle ese mismo año un Vicario Auxiliar que se encontraba en Urachiche, es así como llega a Duaca el SACERDOTE ALESSANDRO ZAINI, quien se convierte en el Párroco de Duaca y Director de la Escuela Parroquial Padre Díaz.",
                                historia6:"A su llegada el Padre Zaini toma la iniciativa de hacerle unas modificaciones administrativas a la escuela parroquial, es decir, impartir enseñanzas a varones y hembras, de igual manera, y permitir superar la etapa primaria. En el año escolar 1955-1956 la escuela parroquial atendía los primeros 5 grados de educación primaria; a finales de 1955 el Obispo Críspulo Benítez le encomienda al Padre Zaini crear un instituto de Educación Secundaria, la cual era la necesidad prioritaria en la población Duaca.",
                                historia7:"El Padre Zaini previendo que la estructura física de la Escuela Parroquial iba a resultar insuficiente para realizar la misión encomendada decide construir una edificación que sirviera de sede a lo que él denominaba el Colegio Parroquial. Desde noviembre de 1955 hasta junio de 1956, se hizo la construcción de la edificación del Instituto de Educación Secundaria.",
                                historia8:"La organización administrativa y académica del Colegio Padre Díaz se rigió por la Ley de Educación de 1955 y su Reglamento General del año 1956, por estar clasificado con la categoría de privado debía ceñirse a la normativa legal correspondiente, por lo que el Padre Zaini, Director del colegio parroquial envía un oficio sin número al ciudadano Ministro de Educación, Director de Educación Secundaria, en especial, con el fin de solicitar la inscripción del plantel para el año escolar 1956-1957 en los cursos de Educación Secundaria, cuya respuesta fue emanada por escrito a través del oficio Nº 793 con fecha 20 de febrero de 1957, ya que cumplía con las exigencias de las normativas legales referidas  a la educación, en este caso, privada, por lo que recibió autorización oficial para iniciar el funcionamiento de Educación Secundaria, siendo así el plantel pionero de la Educación Secundaria del otrora Distrito  Crespo, hoy Municipio Crespo.",
                                historia9:"Las actividades académicas se inician en septiembre del año 1956 y la inauguración de la edificación escolar se realizó el 27 de enero de 1957, para ese entonces, la matrícula de secundaria era de 25 estudiantes. En los años posteriores, la matrícula escolar fue en constante aumento, lo que trajo como consecuencia, la ampliación de la infraestructura escolar iniciándose la construcción de la segunda planta, la cual fue concluida en el año 1963.",
                                historia10:"El colegio, desde su nacimiento, como institución católica, forma parte de la Asociación Venezolana de Educación Católica (AVEC) y en los primeros años de la década de los setenta queda adscrita a la Asociación para la Promoción de la Educación Popular (APEP), en su afán de brindar educación en las mejores condiciones de bienestar y atendiendo las características de los distintos grupos de edades, Monseñor Zaini, inicia la construcción de las estructuras físicas donde funcionarían los talleres y Educación Primaria y Preescolar, las cuales quedaron concluidas en el año escolar 1968-1970.",
                                historia11:"En el año 1996, tras la muerte de Monseñor Zaini, asume el cargo de director el Prof. Daniel Segura Jiménez, quien llega con miras a diversificar las opciones que brindaba el colegio; para lo cual, en el año escolar 1997-1998 incorpora el Diversificado Mercantil mención Contabilidad. Cada nivel de estudio, en Educación Primaria, se duplica  y se inicia un incremento de matrícula; por otro lado, en el mes de Junio del año 1999, se logra la compra de la casa donde ahora funciona el preescolar, dándose así espacios separados para los diferentes niveles educativos.",
                                    historia12:"Desde el 2001  asume la Dirección la Prof Ana Leal quien permanece en el cargo hasta la presente fecha.",
                                    historia13:"En el año 2008, el Colegio  fue seleccionado para formar parte del Programa de Becas de Integración del BBVA Banco Provincial mediante el cual  se brinda la oportunidad de becar a 45 estudiantes.",
                                    historia14:"En el 2010 se conforma el Grupo de la Pastoral Juvenil  ¨Jóvenes Sembradores de Esperanzas¨ a cargo de los profesores Darwin Salas y Marcos Leal.Para el año escolar 2010-2011, por orientaciones del MPPE y después de un proceso de consulta y en atención a la preferencia de la mayoría , se acordó que la opción que debía ofertar la institución era ¨CIENCIAS¨ , es por esto que en el   año escolar 2011-2012, egresa la última promoción de la especialidad Mercantil, Mención Contabilidad.",
                                    historia15:"Cabe destacar que, a partir de los años escolares 2012-2013 y 2013-2014 la institución es incorporada a los Programas del MPPE: Colección BICENTENARIO  y  el Proyecto  CANAIMA.",
                                    historia16:"Luego de una trayectoria de excelencia educativa con valores éticos, morales y humano-cristianos, en julio de 2015 egresa la Promoción Nº 50 y el Colegio invita a prepararse con entusiasmo para la  celebración de su sesenta aniversario. Haciendo honor a nuestro himno exclamemos a viva voz: ¡Fuerza adelante los del “Padre Díaz!."
                                   }
                            ]
                        };	
                         //console.log(obj)
                         // Obtenemos el HTML del template con jQuery y se lo pasamos
                         // a la funcion template de underscore para que la compile
                         var compilado = _.template($('#containerrh').html());
                        // Ejecutamos la funcion compilado y le pasamos la colección
                        // que queremos que use y el HTML generado lo ponemos el DOM
                        // con jQuery
                        $('#resenah').html( compilado(obj) );
//-------------------------------------config-----------------------------------------------
    
      

              
            
}