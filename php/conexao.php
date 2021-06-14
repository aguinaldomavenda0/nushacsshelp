<?php

/**
 * 
 */
class Conexao
{
	private static $con;

	public static function getConexao()
	{
		if (self::$con == null) {
			self::$con =$DBH = new PDO("mysql:host=localhost;dbname=csshelp", 'root', '');
		}
		return self::$con;
	}
}

?>
