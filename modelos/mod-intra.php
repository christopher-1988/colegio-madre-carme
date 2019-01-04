<?php 
	//captar varibles
	include("../mod-server/mod-conexion.php");
	error_reporting(E_ALL ^ E_NOTICE);
	$vr1=$_POST['email'];
	$vr2=$_POST['pass'];


	//validaciones
	if($vr1!="" and $vr2!=""){
		

		if(filter_var($vr1, FILTER_VALIDATE_EMAIL)){
			injection($vr1,$vr2);
		}else{
			$msj=new stdClass();
			$msj->status=200;
			$msj->ms="Por favor ingrese el correo de forma correcta.  : (";
			echo json_encode($msj);	
		}

	}else{
		//objeto cabecera
		$msj=new stdClass();
		$msj->status=200;
		$msj->ms="Por favor llene todo los campos.";
		echo json_encode($msj);
	}
	
	

	function injection($vr1,$vr2){
	/* crear una sentencia preparada */
	include("../mod-server/mod-conexion.php");

		if ($stmt = $mysqli->prepare("SELECT user_correo,user_avatar FROM col_t_user WHERE user_correo=? and user_pass=?")) {

		    /* ligar parámetros para marcadores */
		    $stmt->bind_param("ss", $vr1,$vr2);

		    /* ejecutar la consulta */
		    $stmt->execute();

		    /* almacenar el resultado para poder usar la sentencia mun_rows*/
	    	$stmt->store_result();

				/* ligar variables de resultado */
			$stmt->bind_result($correo,$pass);
			    /* obtener valor */
			 
			if($stmt->fetch()){
				//return true;
				$stmt->close();
				
				$msj=new stdClass();
				$msj->status=210;
				$msj->ms="Usuario Correcto : )";
				$msj->redirect="view-pulso.html";

				return print( json_encode($msj));
			}else{
				//return false;
				$msj=new stdClass();
				$msj->status=210;
				$msj->ms="Usuario incorecto : (";

				return print( json_encode($msj));
		  	}
		}
	}//fin function



?>