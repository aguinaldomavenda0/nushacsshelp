<?php 

/**
 * Autor: Aguinaldo Mavenda
 * Classe Elemento, para gerir todas os Elementos na aplicação
 */
class popular extends Model
{
	
	protected $tabela = 'popular';

	 public function add($nome,$session){
		$sql = "INSERT INTO popular(session, elemento) VALUES (:id, :nome);"; 
		$query = $this->conexao->prepare($sql);
		$query->bindValue(":nome",$nome);
		$query->bindValue(":id",$session);
		if($query->execute()){
			$copynow = (int)(new Elemento())->find('novoNome',$nome)['copy'];
			if((new Elemento())->update("copy",($copynow+1),"novoNome",$nome)){
				return "Salvo";
			}
		}
	}
	public function allDescrescentePopulares($limit)
	{
		$limit = $limit * 10;
		$sql = "SELECT COUNT(ele.novonome) as 'vezes',ele.* FROM `popular` pop JOIN elemento ele ON ele.novonome = pop.elemento GROUP BY ele.novonome ORDER BY ele.copy DESC LIMIT ".$limit.",10";

		$all = $this->conexao->prepare($sql);

		$all->execute();

		return $all->fetchAll();
	}

	public function allDescrescentePopularesNum()
	{
		$sql = "SELECT COUNT(ele.novonome) as 'vezes',ele.* FROM `popular` pop JOIN elemento ele ON ele.novonome = pop.elemento GROUP BY ele.novonome ORDER BY ele.copy DESC ";

		$all = $this->conexao->prepare($sql);

		$all->execute();

		return $all->rowCount();
	}
  
}

?>