<?php 
	
	error_reporting(E_ALL ^ E_NOTICE);
    include_once("../mod-server/mod-conexion.php");
    sleep(2);
    //$op="publicar";
    //$op="buscar";
    //$op="agregar";
    $op=$_REQUEST['sts'];
    //$op="viewof";
    //$op="eliminar";
    //$op="edit";

    /*------varibles del crud----*/
    $set_not_cod=$_REQUEST['set_not_c'];
    $set_not_titulo=$_REQUEST['set_not_t'];
    $set_not_descripcion=$_REQUEST['set_not_d'];
    $set_not_escrito=$_REQUEST['set_not_e'];
    $set_not_publicad=$_REQUEST['set_not_p'];
    
/// hola 
//expresiones regulares
$reg="/^([a-zA-Z0-9\s])+$/";
if(preg_match($reg,$op) && $op!=""){
            
    $condicion="note";
    $estad=$condicion.$op;

            
//-------------------------------viewon--viewof---buscar---agregar-publicar-----------------------//        
    switch($estad)
                {
                    
//--------------------------------------------componente view on------------------------------------------//    
                case "noteviewon":
                    
                    /* ejecutar la consulta $stmt->execute();*/
                    /* almacenar el resultado $stmt->store_result();*/
                    $stmt=$mysqli->query("SELECT not_titulo,not_descripcion,not_publicado FROM notas WHERE not_estatus=1");
                    $json=array();
                    if($stmt->num_rows)
                    {
                        while($row=$stmt->fetch_assoc())
                            {
                               $json[]=$row;  
                            }
                             $stmt->close();
                        echo json_encode($json);

                    }else{
                        $msj="";
                        return print json_encode($msj);
                    }

        
                break; 
                    
//-------------------------------------------componentes view of------------------------------------------//                    
                case "noteviewof":

                    $stmt=$mysqli->query("SELECT * FROM notas");
                    $json=array();
                    if($stmt->num_rows)
                    {
                         while($row=$stmt->fetch_assoc())
                            {
                               $json[]=$row;  
                            }
                             $stmt->close();
                        echo json_encode($json);

                    }else{
                        $msj="";
                        return print json_encode($msj);
                    }
                break;
//-------------------------------------------componentes publicar nota------------------------------------------//
                case "notepublicar":
                    
                    $sql="UPDATE notas SET not_estatus=?,not_publicado=? WHERE (not_cod=? )";
                    
                        $stad=1;
                        if (!$stmt = $mysqli->prepare($sql)) {
                            echo 'Database prepare error';
                            exit;
                        }

                         /* ligar parámetros para marcadores */
                        $stmt->bind_param("isi",$stad,$set_not_publicad,$set_not_cod);

                         /* ejecutar la consulta */
                        if (!$stmt->execute()) {
                             echo 'Database execute error';
                            exit;
                        }else{
                            $msj=new stdClass();
                            $msj->not_cod="080";
                            $msj->not_msm=": ) publicación exitosa";
                            return print json_encode($msj);
                        }
                    
                    
                break;

//-------------------------------------------componentes buscar------------------------------------------//                    
                case "notebuscar":
                    
                    $stmt = $mysqli->prepare("SELECT not_cod,not_titulo,not_descripcion,not_escrito FROM notas WHERE not_cod=?");
                        /* ligar parámetros para marcadores */
                        $stmt->bind_param("i",$set_not_cod);

                        /* ejecutar la consulta */
                        $stmt->execute();
                        
                        /* almacenar el resultado para poder usar la sentencia mun_rows*/
                        /* Store the result (to get properties) */
                        $stmt->store_result();

                        /* Get the number of rows */
                        $num_of_rows = $stmt->num_rows;

                        /* Bind the result to variables */
                        $stmt->bind_result($not_cod, $not_titulo, $not_descripcion,$not_escrito);

                        if($num_of_rows){
                                $json=array();
                            
                            while($stmt->fetch()){
                              
                             $json[not_cod]=$not_cod;
                             $json[not_titulo]=$not_titulo;
                             $json[not_descripcion]=$not_descripcion;
                             $json[not_escrito]=$not_escrito;
                             
                            }
 
                            return print json_encode($json);
                                $stmt->close();
                        }else{
                             $msj=new stdClass();
                             $msj->not_cod="040";
                             $msj->not_msm="no existen";
                             return print json_encode($msj);
                        }
                    
                break;
                    
//-------------------------------------------componentes agregar------------------------------------------//
                case "noteagregar":
                        $stat=0;
                        $sql="INSERT INTO notas (`not_titulo`, `not_descripcion`, `not_escrito`,`not_estatus`) VALUES(?,?,?,?)";

                        if (!$stmt = $mysqli->prepare($sql)) {
                            echo 'Database prepare error';
                            exit;
                        }

                         /* ligar parámetros para marcadores */
                        $stmt->bind_param("sssi",$set_not_titulo, $set_not_descripcion,$set_not_escrito,$stat);

                         /* ejecutar la consulta */
                        if (!$stmt->execute()) {
                             echo 'Database execute error';
                            exit;
                        }else{
                            $stmt->close();
                            $msj=new stdClass();
                            $msj->not_cod="080";
                            $msj->not_msm=": ) agregado de forma exitosa";
                            return print json_encode($msj);
                        }
                        
                break;
                

//-------------------------------------------componentes eliminar------------------------------------------//
        case "noteeliminar":

                $stmt = $mysqli->prepare("DELETE FROM notas WHERE not_cod= ?");
                $stmt->bind_param('i',$set_not_cod);
                $stmt->execute();
                if (!$stmt->execute()) 
                        {
                            echo 'Database execute error';
                            exit;
                        }else{
                            $stmt->close();
                            $msj=new stdClass();
                            $msj->not_cod="080";
                            $msj->not_msm=": ) Eliminada de forma exitosa";
                            return print json_encode($msj);
                        }  
        break;
//-------------------------------------------componentes edit------------------------------------------//

            
            
                case "noteedit":
                    
                    $sql="UPDATE notas SET not_titulo=?,not_descripcion=?,not_escrito=? WHERE (not_cod=? )";
                    
                        $stad=1;
                        if (!$stmt = $mysqli->prepare($sql)) {
                            echo 'Database prepare error';
                            exit;
                        }

                         /* ligar parámetros para marcadores */
                        $stmt->bind_param("sssi",$set_not_titulo,$set_not_descripcion,$set_not_escrito,$set_not_cod);

                         /* ejecutar la consulta */
                        if (!$stmt->execute()) {
                             echo 'Database execute error';
                            exit;
                        }else{
                            $msj=new stdClass();
                            $msj->not_cod="080";
                            $msj->not_msm=": ) publicación exitosa";
                            return print json_encode($msj);
                        }
                    
                    
                break;
                     
            }
                    
                
			
    }else{
        $msj=new stdClass();
        $msj->not_titulo=" : (";
        $msj->not_descripcion=" Disculpa,Error con el Servidor";
        return print json_encode($msj);
    }

$mysqli->close();		     

?>