  case "notebuscar":
                    
                    $stmt = $mysqli->prepare("SELECT * FROM notas WHERE not_cod=?");

                        /* ligar parámetros para marcadores */
                        $stmt->bind_param("i",$set_not_cod);

                        /* ejecutar la consulta */
                        $stmt->execute();
                        
                        /* almacenar el resultado para poder usar la sentencia mun_rows*/
                        //$stmt->store_result();
                     
                        /* obtener valor */
                        $resultado = $stmt->get_result();
                        
                        if($resultado->num_rows){
                            //array
                            $json=array();
                            while($row=$resultado->fetch_assoc()){
                             $json[]=$row;
                            }
                            echo json_encode($json);
                                $stmt->close();
                        }else{
                             $msj=new stdClass();
                             $msj->not_cod="040";
                             $msj->not_msm="no existen";
                             return print json_encode($msj);
                        }