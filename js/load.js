window.addEventListener('DOMContentLoaded',()=>{
	if (Number(window.outerWidth) > 650) {
		setTimeout(()=>{document.querySelector('.container-loading').classList.add('load')},1000)
	}else{
		document.querySelector('.container-loading h2').innerHTML="Dispositivo não compativel com a aplicação, para uma boa experiência use computador. <br/> <span style='font-weight: 300;'>Obrigado!</span>"
	}
})