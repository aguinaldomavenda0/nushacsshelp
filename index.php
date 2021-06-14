<?php 
include "php/include.php";
session_start();
if (!isset($_SESSION['maven'])) {
	$_SESSION['maven'] = session_id();
	$result = (new User())->add($_SESSION['maven']);
	var_dump($result);
}

header("location:index.html");
 ?>