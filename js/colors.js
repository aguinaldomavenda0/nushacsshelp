window.addEventListener('DOMContentLoaded',()=>{
	let allColors = ['#f44336','#e91e63','#9c27b0','#ff8a80','#5e35b1','#e040fb','#7c4dff ','#e8eaf6','#e3f2fd' , '#3f51b5 ','#2196f3','#e1f5fe','#e0f7fa','#006064','#01579b' ,'#4caf50' ,'#009688 ','#eeff41','#b2ff59','#ffc107','#fdd835',"#fb8c00","#9e9e9e","#795548"]
	
	function updateColor(event) {
		const styleColorInput = document.querySelector('#colorInput')
		const styleColorInputS = document.querySelector('#colorInputS')
		styleColorInput.style = 'background-color:'+allColors[event.currentTarget.getAttribute('data-maven')]+';'
		styleColorInputS.style = 'background-color:'+allColors[event.currentTarget.getAttribute('data-maven')]+';'
		styleColorInput.value = allColors[event.currentTarget.getAttribute('data-maven')]
		styleColorInputS.value = allColors[event.currentTarget.getAttribute('data-maven')]
	}
	function colorkey(event) {
		const dataInputColor = event.currentTarget
		if(/^([0-9A-F]{3}){1,2}$/i.test(dataInputColor.value)){
			if (dataInputColor.value.charAt(0) == "#") {
				dataInputColor.style ='background-color:'+dataInputColor.value
			}else{
				dataInputColor.style ='background-color:#'+dataInputColor.value
			}
		}else{
			dataInputColor.style ='background-color:'+dataInputColor.value
		}
	}
	async function luzesActionColor(event) {
		let i = document.getElementById('style')
		let tema = await localStorage.getItem('mavenTemaLeiloes')
       	console.log(tema)
        if (tema == null) {
                localStorage.setItem('mavenTemaLeiloes','dark')
        		i.setAttribute("href","./css/index1.css")
        		console.log('Bugou aqui')
        }else{
        	if (tema == "light") {
        	    i.setAttribute("href","./css/index.css")
        		localStorage.setItem('mavenTemaLeiloes','dark')
                event.currentTarget.innerHTML = '<i class="material-icons">brightness_5</i>'
        	}else{
        	    localStorage.setItem('mavenTemaLeiloes','light') 
                event.currentTarget.innerHTML = '<i class="material-icons">brightness_2</i>'
        		i.setAttribute("href","./css/index1.css")
        	}
        }
	}
	
	function reloadTheme() {
       let tema = localStorage.getItem('mavenTemaLeiloes') 
       let i = document.getElementById('style') 
       	if(tema =='light'){
            i.setAttribute("href","./css/index1.css") 
            document.querySelector('.luzes').innerHTML = '<i class="material-icons">brightness_2</i>'
       	}else if (tema=='dark'){ 
            document.querySelector('.luzes').innerHTML = '<i class="material-icons">brightness_5</i>'
            i.setAttribute("href","./css/index.css")
       	}	
}
	
	reloadTheme()
	btnColors = document.querySelectorAll('.a')
	document.querySelector('#colorInput').addEventListener('keyup',colorkey)
	document.querySelector('#colorInputS').addEventListener('keyup',colorkey)
	document.querySelector('.luzes').addEventListener('click',luzesActionColor)
	btnColors.forEach((item)=>{item.addEventListener('click',updateColor)})
})