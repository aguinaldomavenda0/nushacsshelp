<?php 

/**
 * Autor: Aguinaldo Mavenda
 * Classe Elemento, para gerir todas os Elementos na aplicação
 */
class elemento extends Model
{
	
	protected $tabela = 'elemento';

	public function add($nome, $boxShadow, $boxRadius, $boxGradient)
	{
		$sql = "INSERT INTO elemento (novonome, boxShadow, borderRadius, gradient) VALUES (:nome, :boxShadow, :boxRadius, :boxGradient);" ; 
		$query = $this->conexao->prepare($sql);
		$query->bindValue(":nome",$nome);
		$query->bindValue(":boxShadow",$boxShadow);
		$query->bindValue(":boxRadius",$boxRadius);
		$query->bindValue(":boxGradient",$boxGradient);
		return $query->execute();
	}
	public function addPopular($nome,$session){
		$sql = "INSERT INTO popular(session, elemento) VALUES (:id, :nome);"; 
		$query = $this->conexao->prepare($sql);
		$query->bindValue(":nome",$nome);
		$query->bindValue(":id",$session);
		return $query->execute();	
	}
  
}

?>