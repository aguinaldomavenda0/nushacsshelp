<?php 
/**
 * Projecto: Digital Educa
 * Design Grafico: Delcio De Carvalho
 * Desenvolvedor Back-End: Aguinaldo Mavenda
 */

class maven
{
	
	public function literalSemelhanteT($str){
		$str = explode(" ", $str);
		$composicao = "%";
		foreach ($str as $key => $value) {
			$composicao = $composicao.$value."%";
		}
		return($composicao);
	}


	public function diaAnterior(){
		$dataActual = date('d-m-Y');
		$dataPorPartes = explode("-", $dataActual);
		if (((int)$dataPorPartes[0])==1) {
			# code...
			if ((((int)$dataPorPartes[1])==1)) {
				# code...
				return (((int)$dataPorPartes[2])-1)."-12-31";
			}else{
				$mes = ((((int)$dataPorPartes[1])-1) > 9)?(((int)$dataPorPartes[1])-1):"0".(((int)$dataPorPartes[1])-1);

				return $dataPorPartes[2]."-".$mes."-31";

			}

		}else{
			$dia = ((((int)$dataPorPartes[0])-1) > 9)?(((int)$dataPorPartes[0])-1):"0".(((int)$dataPorPartes[0])-1);
			return $dataPorPartes[2]."-".$dataPorPartes[1]."-".$dia;

		}
	
	}

	public function diaPosterior(){
		$dataActual = date('d-m-Y');
		$dataPorPartes = explode("-", $dataActual);
		if (((int)$dataPorPartes[0])==1) {
			# code...
			if ((((int)$dataPorPartes[1])==12)) {
				# code...
				return (((int)$dataPorPartes[2])+1)."-01-01";
			}else{
				$mes = ((((int)$dataPorPartes[1])+1) > 9)?(((int)$dataPorPartes[1])-1):"0".(((int)$dataPorPartes[1])+1);

				return $dataPorPartes[2]."-".$mes."-01";

			}

		}else{
			$dia = ((((int)$dataPorPartes[0])+1) > 9)?(((int)$dataPorPartes[0])+1):"0".(((int)$dataPorPartes[0])+1);
			return $dataPorPartes[2]."-".$dataPorPartes[1]."-".$dia;

		}
	
	}
	public function anos($data)
	{
		$data = strtotime($data);
		$data = date('d-m-Y',$data);
		$strData = explode("-", $data);
		$ano = (int)$strData[2];

		$dataActual = date('d-m-Y');
		$strDataActual = explode("-", $dataActual);
		$anoActual = (int)$strDataActual[2];

		return $anoActual - $ano;
	}
	public function quando($data)
	{
		$notifica = "";
		
		$data = strtotime($data);
		$data = date('d-m-Y',$data);

		$dataActual = date('d-m-Y');

		$diaAnterior = $this->diaAnterior();
		$diaAnterior = strtotime($diaAnterior);
		$diaAnterior = date('d-m-Y',$diaAnterior);

		$diaPosterior = $this->diaPosterior();
		$diaPosterior = strtotime($diaPosterior);
		$diaPosterior = date('d-m-Y',$diaPosterior);
		//$diaAnterior = explode("-", $diaAnterior);

		if ($data == $diaAnterior) {
			return "ONTEM";
		}
		else if ($data == $dataActual) {
			# code...
			return "HOJE";
		}
		else if ($data == $diaPosterior) {
			return "AMANHÃ";
		}

		return $this->dataIngParaPtIn($data);
		

	}
	
	public function aQuantoTempo($data)
	{
		$notifica = "";

		$data = strtotime($data);
		$hora = date('H:i',$data);
		$data = date('d-m-Y',$data);
		$horaPorPartes = explode(':', $hora);
		$dataAplicacao = explode("-", $data);


		$dataActual = date('d-m-Y');
		$horaActual = date('H:i');
		$horaActualPorPartes = explode(':', $horaActual);
		$dataActualSystema = explode("-", $dataActual);
		
		/*echo $horaActual."<br>".$dataActual."<br>---------------------------<br>";
		echo $hora."<br>".$data."<br>---------------------------<br>";*/


		if ($dataActualSystema[2] == $dataAplicacao[2])
		{
			if ($dataAplicacao[1] == $dataActualSystema[1])
			{
				if ($dataAplicacao[0] == $dataActualSystema[0])
				{
					if ($horaPorPartes[0] == $horaActualPorPartes[0])
					{
						$num1 = (int) $horaActualPorPartes[1];
						$num2 = (int) $horaPorPartes[1];
						if ($num1 == $num2 || ($num1 - $num2) < 10 ) {
							$notifica = "Agora mesmo.";
						}
						else{

							$notifica = (($num1 - $num2)>1) ? "à ".($num1-$num2)." minutos." : "à ".($num1-$num2)." minuto." ;
						}
///						echo("Ano-Mes-Dia e Hora são o Mesmo!");
					}
					else {
						# code...
						$hora1 = (int) $horaActualPorPartes[0];
						$hora2 = (int) $horaPorPartes[0];
						$notifica = (($hora1 - $hora2) > 1) ? "à ".($hora1-$hora2)." horas átras." : "à ".($hora1-$hora2)." hora átras."  ;
					}
				}
				else
				{
					$dia1 = (int) $dataAplicacao[0];
					$dia2 = (int) $dataActualSystema[0];
					$notifica =(($dia2-$dia1) > 1) ? "à ".($dia2-$dia1)." dias átras." : "à ".($dia2-$dia1)." dia átras."  ;
				}
			}
			else{
				$mes1 = (int) $dataAplicacao[1];
				$mes2 = (int) $dataActualSystema[1];
				$notifica = (($mes2 - $mes1) > 1 ) ? "à ".($mes2 - $mes1)." meses átras.":"à ".($mes2 - $mes1)." mês átras.";
			}
		}
		else
		{
			$ano1 = (int) $dataAplicacao[2];
			$ano2 = (int) $dataActualSystema[2];
			$notifica = (($ano2 - $ano1) > 1) ? "à ".($ano2 - $ano1)." anos átras." : "à ".($ano2 - $ano1)." ano átras.";
		}


		/*var_dump($data);
		var_dump($dataActual);*/
		return $notifica;
	}
	public function imgCheck($img){
		if($img != ""){

			if (file_exists("images/upload/".$img)) {
		
				return $img;
		
			}

		}
		return "usuario.png";

	}
	public function dataIngParaPt($data)
	{
		$data = strtotime($data);

		$data = date('d-M-Y-H:m',$data);
		$verif=explode('-', $data);

		switch ($verif[1]) {
			case 'Jan':
				$mes = "Janeiro";
				break;
			case 'Feb':
				$mes = "Fevereiro";
				break;
			case 'Mar':
				$mes = "Março";
				break;
			case 'Apr':
				$mes = "Abril";
				break;
			case 'May':
				$mes = "Maio";
				break;
			case 'Jun':
				$mes = "Junho";
				break;
			case 'Jul':
				$mes = "Julio";
				break;
			case 'Aug':
				$mes = "Agosto";
				break;
			case 'Sep':
				$mes = "Setembro";
				break;
			case 'Oct':
				$mes = "Outubro";
				break;
			case 'Nov':
				$mes = "Novembro";
				break;
			case 'Dec':
				$mes = "Dezembro";
				break;
			default:
				# code...
				break;
		}
		return $verif[0]." ".$mes." ".$verif[2]." ás ".$verif[3];
	}

	public function dataIngParaPtIn($data)
	{
		$data = strtotime($data);

		$data = date('d-M-Y-H:m',$data);
		$verif=explode('-', $data);

		switch ($verif[1]) {
			case 'Jan':
				$mes = "Janeiro";
				break;
			case 'Feb':
				$mes = "Fevereiro";
				break;
			case 'Mar':
				$mes = "Março";
				break;
			case 'Apr':
				$mes = "Abril";
				break;
			case 'May':
				$mes = "Maio";
				break;
			case 'Jun':
				$mes = "Junho";
				break;
			case 'Jul':
				$mes = "Julio";
				break;
			case 'Aug':
				$mes = "Agosto";
				break;
			case 'Sep':
				$mes = "Setembro";
				break;
			case 'Oct':
				$mes = "Outubro";
				break;
			case 'Nov':
				$mes = "Novembro";
				break;
			case 'Dec':
				$mes = "Dezembro";
				break;
			default:
				# code...
				break;
		}
		return $verif[0]." ".$mes." ".$verif[2];
	}

	public function upLoadImagem($ficheiro,$pasta){

		$formatos = array("png","jpg","jpeg","gif");
		$extensao = pathinfo($ficheiro['name'], PATHINFO_EXTENSION);
		if(in_array($extensao, $formatos)){
    		$temporario = $ficheiro['tmp_name'];
    		$novoNome = "maven".uniqid().".$extensao";

    		if(move_uploaded_file($temporario, $pasta.$novoNome)){
        		$mensagem = "Upload feito com sucesso!";
    		}
    		else{
        		$novoNome = "";
    		}
		}else{
    		$novoNome = "";
		}

		return $novoNome;
		//return $pasta.'maven'.$novoNome;
	}
	public function smsBom($value='')
	{
		echo ' 

		<script type="text/javascript">
		window.onload = function() {
        Materialize.toast("<span class=\'green-text\'>'.$value.'</span>",2500)
      }
      
    </script>
		';	
	}
	public function smsMal($value='')
	{
		echo ' 

		<script type="text/javascript">
		window.onload = function() {
      
        Materialize.toast("<span class=\'red-text\'>'.$value.'</span>",2500)
      }
      
    </script>
		';	
	}
	public function sessionSecurity()
	{
		if (!isset($_SESSION['nomeUser'])) {
			header('location:/leilao');
		}
	}
}

 ?>