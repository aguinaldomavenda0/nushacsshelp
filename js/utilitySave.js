function ajaxCallForYour(url, form) {
		
		let ajax = new XMLHttpRequest;
		ajax.open('POST', url, true);
		ajax.send(form);
		ajax.onreadystatechange = (dados)=>{
			console.log((Number(dados.target.readyState)/4)*100 +'%')
		}
		
		ajax.onloadend = (inner)=>{
				executar(inner.target.response)
		}
		
	}
function executar(e) {
		console.log(e)
		
	}

	function addElemento(shadow,radius,gradient) {
		let formlario = new FormData()
		formlario.append('shadow',shadow)
		formlario.append('radius', radius)
		formlario.append('gradient',gradient)
		formlario.append('action',"save")
		
		ajaxCallForYour('http://localhost/teste/php/json/action.php',formlario)
		
	}
	function addPopular(elemento) {
		let formlario = new FormData()
		formlario.append('nome',elemento)
		formlario.append('action', "copy")
		
		ajaxCallForYour('http://localhost/teste/php/json/action.php',formlario)
		
	}
	