<?php
	


//$vrl="localhost";
//$vru="root";
//$vrp="";
//$vrbd="colegiopadrediaz";
//$link = mysqli_connect("www.colegiopadrediaz.com.ve","colegiop_joseph","Colegio2015","colegiop_padrediaz") or die("Error " . mysqli_error($link));
//mysqli_connect('www.senderoartesanalaguaviva.com.ve','sendero2_chris','55AlexandeR4487','sendero2_artesanal') or //die("Error " . mysqli_error($link))

$mysqli = new mysqli("localhost","root","", "colegiopadrediaz");
/* comprueba la conexi贸n */
if (mysqli_connect_errno()) {
    echo("Connect failed: %s\n". mysqli_connect_error());
    exit();
}

//if ($result = $mysqli->query("select * from notas")) {
//$row = $result->fetch_array();
//echo $x=$row['not_titulo'];
//$result->close();
//}
	
?>