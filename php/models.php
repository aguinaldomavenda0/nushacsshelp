<?php 
	
abstract class Model
{
	protected $conexao;

	public function __construct()
	{
		$this->conexao = Conexao::getConexao();
	}

	public function all()
	{
		$sql = "SELECT *FROM ".$this->tabela." ORDER BY codigo DESC"; 
		$all = $this->conexao->prepare($sql);

		$all->execute();

		return $all->fetchAll();
	}


	public function allDescrescente($limit)
	{
		$limit = $limit * 10;
		$sql = "SELECT *FROM ".$this->tabela." ORDER BY dataCriado DESC Limit ".$limit.", 10";

		$all = $this->conexao->prepare($sql);

		$all->execute();

		return $all->fetchAll();
	}

	public function find($field, $value){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." = :".$field;

		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->execute();

		return $find->fetch();
	}
	/*Função Verifica se há uma ocorrencia dos atributos recebido na na tabela, por dois parametro*/ 
	public function existeDoisValores($field1, $value1, $field2, $value2){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field1." = :".$field1." AND ".$field2." = :".$field2;

		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field1, $value1);
		$find->bindValue(":".$field2, $value2);
		$find->execute();

		return $find->rowCount();
	}
	/*Função Verifica se há uma ocorrencia dos atributos recebido na na tabela, por treis parametro*/ 
	public function existeTreisValores($field1, $value1, $field2, $value2, $field3, $value3){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field1." = :".$field1." AND ".$field2." = :".$field2." AND ".$field3." = :".$field3;

		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field1, $value1);
		$find->bindValue(":".$field2, $value2);
		$find->bindValue(":".$field3, $value3);
		$find->execute();

		return $find->rowCount();
	}

	public function findLast($field, $value){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." = :".$field." ORDER BY codigo DESC";

		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->execute();

		return $find->fetch();
	}

	public function update($field, $value,$where,$valWhere){
		
		$sql = "UPDATE ".$this->tabela." SET ".$field." = :".$field." WHERE ".$where."= :".$where;
		//var_dump($sql);
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->bindValue(":".$where, $valWhere);
		return $find->execute();

		//return $find->fetch();
	}
	
	public function updateFoto($field, $value,$where,$valWhere,$entidade){
		
		$sql = "UPDATE foto SET ".$field." = :".$field." WHERE entidade = :entidade  AND principal=1 AND ".$where."= :".$where;
		//var_d/ump($sql);
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->bindValue(":entidade", $entidade);
		$find->bindValue(":".$where, $valWhere);
		$find->execute();

		//return $find->fetch();
	}

		public function updateFoto1($field, $value,$where,$valWhere,$entidade){
		
		$sql = "UPDATE foto SET ".$field." = :".$field." WHERE entidade = :entidade  AND  ".$where."= :".$where;
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->bindValue(":entidade", $entidade);
		$find->bindValue(":".$where, $valWhere);
		return $find->execute();

		//return $find->fetch();
	}

	public function getFoto1($where,$valWhere,$entidade){
		
		$sql = "SELECT *FROM foto WHERE entidade = :entidade  AND  ".$where."= :".$where;
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":entidade", $entidade);
		$find->bindValue(":".$where, $valWhere);
		$find->execute();

		return $find->fetch();
	}	
	public function update1($field, $value,$where,$valWhere){
		
		$sql = "UPDATE ".$this->tabela." SET ".$field." = :".$field." WHERE ".$where."= :".$where;

		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->bindValue(":".$where, $valWhere);
		return $find->execute();

	}
	
	function numRowns($array){
	$contas = 0;
	foreach ($array as $key => $value) {
		# code...
		$contas = $key;
	}
	return $contas;
	}

	
	public function returnData($field, $value,$return){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." like :".$field;
		$value = "%".$value."%";
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->execute();

		return $find->fetch()[$return];
	}

	public function delete($field, $value){
		
		$sql = "DELETE FROM ".$this->tabela." WHERE ".$field." = :".$field;
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		return $find->execute();

	}
	
	public function existe($field, $value){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." = :".$field;

		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->execute();

		return $find->rowCount();
	}
	public function findAll($field, $value){

		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." like :".$field;
		$value = (new Maven)->literalSemelhanteT($value);
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->execute();

		return $find->fetchAll();
	}

	public function findAlllimit($field, $value,$limit){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." like :".$field. " Limit ".$limit.", 15";
		$value = strLike($value);
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->execute();

		return $find->fetchAll();
	}

	public function findAllNotEquals($field, $value){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." = :".$field; 
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->execute();

		return $find->fetchAll();
	}
	
	public function findAllNotEquals2($field, $value){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." = :".$field." Limit 0, 4"; 
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->execute();

		return $find->fetchAll();
	}
    
	public function findAllNotEqualsDoisElementos($field, $value, $field1, $value1){
		
		$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." = :".$field." AND ".$field1." = :".$field1;
		//var_dump($sql);
		$find = $this->conexao->prepare($sql);
		$find->bindValue(":".$field, $value);
		$find->bindValue(":".$field1, $value1);
		$find->execute();

		return $find->fetchAll();
	}
	public function OncefindAllNotEqualsDoisElementos($field, $value, $field1, $value1){
			
			$sql = "SELECT *FROM ".$this->tabela." WHERE ".$field." = :".$field." AND ".$field1." = :".$field1;
			//var_dump($sql);
			$find = $this->conexao->prepare($sql);
			$find->bindValue(":".$field, $value);
			$find->bindValue(":".$field1, $value1);
			$find->execute();

			return $find->fetch();
		}
		
	
	public function num(){
		
		$sql = "SELECT *FROM ".$this->tabela;

		$find = $this->conexao->prepare($sql);
		$find->execute();

		return $find->rowCount();
	}

}
 ?>