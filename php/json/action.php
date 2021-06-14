<?php 
include '../include.php';

session_start();

$shadow = strip_tags(trim(filter_input(INPUT_POST, 'shadow')));
$radius = strip_tags(trim(filter_input(INPUT_POST, 'radius')));
$gradient = strip_tags(trim(filter_input(INPUT_POST, 'gradient')));
$nome = strip_tags(trim(filter_input(INPUT_POST, 'nome'))); 
$action = strip_tags(trim(filter_input(INPUT_POST, 'action')));
$elementos = strip_tags(trim(filter_input(INPUT_POST, 'elementos')));
$session = "dsada";

$novoNome = "maven".uniqid();


if ($action == 'save') {
	if ((new Elemento())->existeTreisValores('boxShadow', $shadow, 'borderRadius', $radius, 'gradient', $gradient)==0) {
		$execute = (new Elemento())->add($novoNome, $shadow, $radius, $gradient);
		echo(json_encode($execute));
	}else{
		echo(json_encode('Já existe'));
	}
}else if($action == 'copy'){
	if ((new Popular())->existeDoisValores('session', $session, 'elemento', $nome)==0) {
		$execute = (new Popular())->add($nome,$session);
		echo(json_encode($execute));
	}else{
		echo(json_encode('Já existe'));
	}
}else if($action == 'getAll'){
	$execute = (new Elemento())->allDescrescente($elementos);
	$numElementos = (new Elemento())->num();
	array_push($execute, $numElementos);
	echo(json_encode($execute));
}else if($action == 'getPopulares'){
	$execute = (new Popular())->allDescrescentePopulares($elementos);
	$numElementos = (new Popular())->allDescrescentePopularesNum();
	array_push($execute, $numElementos);
	echo(json_encode($execute));
}


//echo ();

/*
$utilizador = (new User())->find('email',$_SESSION['nomeUser']);
$arrayInit= array(); 
$emParticipacaoLeiloes = (new Lance())->participando($utilizador['codigo']);

foreach($emParticipacaoLeiloes as $l){
$last = (new Lance())->findLast('lote',$l['codigo']);

if ($last['perfil']!=$utilizador['codigo']) {
	array_push($arrayInit, $l);
}
}
if(isset($_SESSION['nomeUser'])){
	echo(json_encode($arrayInit));
}
*/
 ?>