 
	

	//constructor de la clase
	public function __construct(){
		$this->conectar();
	}
	private function conectar(){
		$this->conexion=mysql_connect($this->sevidor,$this->usuario,$this->clave);
		mysql_select_db($this->bd,$this->conexion);
		}
	//destructor de la clase 
	public function __destruct(){
	   	
		}
	
	//metodo filtro
	public function filtro($sql){
		$filtr=mysql_query($sql,$this->conexion);
		return $filtr;
		} 
	//para limpiar el buffer d memoria
	public function cerrarfiltro($datos){
		mysql_free_result($datos);
		}
	//contrucnion del arrglo de los resultados	
	public function arreglo($datos){
		$vector= mysql_fetch_array($datos);
		return $vector;
		}		
	//array asociativo 	
	public function assoc ($datos){
		$assoc=mysql_fetch_assoc($datos);
		return $assoc;
		}
	//para ejecutar consultas		
	public function ejecutar ($sql){
		$ejec=mysql_query($sql,$this->conexion);
		return $ejec;
		}
	//comprobar la cantidad de registro
	public function contador($cont){
		$contador=mysql_num_rows($cont);
		return $contador; 
		}


	
	//cierra la conexion de la bd	
	public function cerraconexion(){
		mysql_close($this->conexion);
		}	