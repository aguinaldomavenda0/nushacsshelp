<?php 
class user extends Model
{
	protected $tabela = "session"	;

	public function add($codigo)
	{
		$id = $this->getID($codigo);
		if (!empty($id)) {

			return $id;

		}
		else{
			$sql = "INSERT INTO session(id) VALUES (:codigo);";
			$insert = $this->conexao->prepare($sql);
			$insert->bindValue(":codigo", $codigo);
			$insert->execute();

			return $this->getID($codigo);	
		}

		
	}
	public function getID($codigo)
	{
		$sql = "SELECT `id` FROM `session` WHERE id=:id";


		$all = $this->conexao->prepare($sql);

		$all->bindValue(":id", $codigo);
		$all->execute();

		return $all->fetch()['id'];
	} 

	
}


?>