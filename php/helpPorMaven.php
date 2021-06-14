<?php 
function integridade($dado)
{
	if (isset($_POST[$dado]) && $_POST[$dado] != "") {
		return 1;
	}
	return 0;
}

function funcaoUtilizadorNow($codigo){
	switch ($codigo) {
		case 0:
			return "Administrador";
			break;
		
		case 1:
			return "Departamento Cientifico";
			break;
		
		case 2:
			return "Secretário(a) Acadêmico";
			break;
		
		case 3:
			return "Discinente";
			break;
		
		default:
			# code...
			break;
	}
}

function tratamentoDados($e){
	return htmlspecialchars($e);
}

function estadoActual($e){
	if ($e == 1) {
		return "Activo";
	}
		return "Desactivo";
	//return htmlspecialchars($e);
}

function activoDesativo($e)
{
	if ($e != 1) {
		return 'btn-laranja';
	}
	else{
		return 'btn btn-white';
	}
}

function resultadoEstado($e='')
{
	if ($e != 1) {
		return '<div class="btn-group project-list-ad-rd">
			<button class="btn btn-white btn-xs">Inativo</button></div>';
	}
	else{
		return '<button class="btn btn-white btn-xs">Activo</button>';
	}
}

 ?>
