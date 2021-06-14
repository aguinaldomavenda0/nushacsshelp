function editaBoxShadow(boxShadow,boxShadowVar) {
	let str = ''
	let count = 0
	console.log(boxShadowVar)
	boxShadowVar.forEach((item)=>{
		const iii = (count == boxShadowVar.length - 1)?"":","
		count += 1
		str += item[0]+'px '+ item[1]+'px '+ item[2]+'px '+ item[3]+'px '+ item[4] +iii
	}) 
	boxShadow.setAttribute('style','box-shadow:'+str)
}
function editaBox(boxShadow,boxShadowVar) {
	boxShadow.setAttribute('style','border-radius:'+
	boxShadowVar[0]+'px '+
	boxShadowVar[1]+'px '+
	boxShadowVar[2]+'px '+
	boxShadowVar[3]+'px ;')
}
function editaBoxGradient(boxShadow,boxShadowVar) {
	const resume = 'background: linear-gradient('+
	boxShadowVar[0]+' '+
	boxShadowVar[1].join(' ')+','+
	boxShadowVar[2].join(',')+
	');'
	const one = document.querySelector('.btnPaletControlG[data-colorIndex="10"]')
	one.setAttribute('style',resume)	
	boxShadow.setAttribute('style',resume)	
}

window.addEventListener('DOMContentLoaded',()=>{
	let estadoMove = false
	const boxShadow = document.getElementById('caixaShadow')
	const boxRadius = document.querySelector('.caixaShadow')
	const boxGradient = document.querySelector('.caixaGradient')
	const btnsShadow = document.querySelectorAll('.btnShadow')
	const menubtnsLow = document.querySelectorAll('.btn-menu')
	const btnsRadius = document.querySelectorAll('.btnRadius')
	const btnsGradient = document.querySelectorAll('.btnGradient')
	let boxShadowVar = [["0", "4", "20", "2", "#cf4225"]];
	let boxRadiusVar = ["6", "122", "4", "108"];
	let boxGradientVar = ["to",["right"],["#fdd835", "#e040fb"]]
	let allColors = ['#f44336','#e91e63','#9c27b0','#ff8a80','#5e35b1','#e040fb','#7c4dff ','#e8eaf6','#e3f2fd' , '#3f51b5 ','#2196f3','#e1f5fe','#e0f7fa','#006064','#01579b' ,'#4caf50' ,'#009688 ','#eeff41','#b2ff59','#ffc107','#fdd835',"#fb8c00","#9e9e9e","#795548"]
	let i = 0;

	function actionShadow(event){
		const activoAction = document.querySelector('.activoAction')
		if(event.currentTarget.classList.contains('left')){
			boxShadowVar[activoAction.getAttribute('data-colorIndex')][0] = Number(boxShadowVar[activoAction.getAttribute('data-colorIndex')][0]) - 3
		}else if(event.currentTarget.classList.contains('right')){
			boxShadowVar[activoAction.getAttribute('data-colorIndex')][0] = Number(boxShadowVar[activoAction.getAttribute('data-colorIndex')][0]) + 3
		}else if(event.currentTarget.classList.contains('up')){
			boxShadowVar[activoAction.getAttribute('data-colorIndex')][1] = Number(boxShadowVar[activoAction.getAttribute('data-colorIndex')][1]) - 3
		}else if(event.currentTarget.classList.contains('down')){
			boxShadowVar[activoAction.getAttribute('data-colorIndex')][1] = Number(boxShadowVar[activoAction.getAttribute('data-colorIndex')][1]) + 3
		}else if(event.currentTarget.classList.contains('blurOn')){
			boxShadowVar[activoAction.getAttribute('data-colorIndex')][2] = Number(boxShadowVar[activoAction.getAttribute('data-colorIndex')][2]) + 3
		}else if(event.currentTarget.classList.contains('blurOff')){
			boxShadowVar[activoAction.getAttribute('data-colorIndex')][2] = Number(boxShadowVar[activoAction.getAttribute('data-colorIndex')][2]) - 3
		}else if(event.currentTarget.classList.contains('expandOff')){
			boxShadowVar[activoAction.getAttribute('data-colorIndex')][3] = Number(boxShadowVar[activoAction.getAttribute('data-colorIndex')][3]) - 3
		}else if(event.currentTarget.classList.contains('expandOn')){
			boxShadowVar[activoAction.getAttribute('data-colorIndex')][3] = Number(boxShadowVar[activoAction.getAttribute('data-colorIndex')][3]) + 3
		}
		//console.log(boxShadowVar)
		editaBoxShadow(boxShadow,boxShadowVar)
	}	
	function actionGradient(event){
		if (event.currentTarget.classList.contains('DownGradient')) {
			gradientVerifica("bottom",boxGradientVar)
		} else if (event.currentTarget.classList.contains('UpGradient')) {
			gradientVerifica("top",boxGradientVar)
		} else if (event.currentTarget.classList.contains('LeftGradient')) {
			gradientVerifica("left",boxGradientVar)
		} else if (event.currentTarget.classList.contains('RightGradient')) {
			gradientVerifica("right",boxGradientVar)
		}
		editaBoxGradient(boxGradient, boxGradientVar)
	}
	function actionRadius(event){
		if (event.currentTarget.classList.contains('diagonalLeftOut')) {
			boxRadiusVar[0] = Number(boxRadiusVar[0]) - 3
		}else if (event.currentTarget.classList.contains('diagonalLeftIn')){
			boxRadiusVar[0] = Number(boxRadiusVar[0]) + 3
		}else if (event.currentTarget.classList.contains('diagonalRightOut')){
			boxRadiusVar[1] = Number(boxRadiusVar[1]) - 3
		}else if (event.currentTarget.classList.contains('diagonalRightIn')){
			boxRadiusVar[1] = Number(boxRadiusVar[1]) + 3
		}else if (event.currentTarget.classList.contains('diagonalRightOutDown')){
			boxRadiusVar[2] = Number(boxRadiusVar[2]) - 3
		}else if (event.currentTarget.classList.contains('diagonalRightInDown')){
			boxRadiusVar[2] = Number(boxRadiusVar[2]) + 3
		}else if (event.currentTarget.classList.contains('diagonalLeftOutDown')){
			boxRadiusVar[3] = Number(boxRadiusVar[3]) - 3
		}else if (event.currentTarget.classList.contains('diagonalLeftInDown')){
			boxRadiusVar[3] = Number(boxRadiusVar[3]) + 3
		} 
		editaBox(boxRadius, boxRadiusVar)
	}
	function addColorShadowIn(evnt) {
		const inputColor = document.getElementById('colorInputS')
		let colorSelected = ''
		if (inputColor.value=='') {return false}
		if(/^([0-9A-F]{3}){1,2}$/i.test(inputColor.value)){
			if (inputColor.value.charAt(0) == "#") {
				colorSelected = inputColor.value
			}else{
				colorSelected ='#'+ inputColor.value
			}
		}else{
			colorSelected = inputColor.value
		}
		console.log(boxShadowVar)
		document.querySelector('.activoAction').style = "background-color:"+colorSelected
		const activoAction = document.querySelector('.activoAction')
		boxShadowVar[activoAction.getAttribute('data-colorIndex')][4] = colorSelected
		inputColor.value = ""
		editaBoxShadow(boxShadow, boxShadowVar)
	}
	function addColorGradient(event){
		const controlSelected = document.querySelector('.activoActionG')
		if(controlSelected.getAttribute('data-colorIndex')=='10'){return false;}
		const inputColor = document.getElementById('colorInput')
		let colorSelected = ''
		if (inputColor.value=='') {return false}
		if(/^([0-9A-F]{3}){1,2}$/i.test(inputColor.value)){
			if (inputColor.value.charAt(0) == "#") {
				colorSelected = inputColor.value
			}else{
				colorSelected ='#'+ inputColor.value
			}
		}else{
			colorSelected = inputColor.value
		}
		boxGradientVar[2][controlSelected.getAttribute('data-colorIndex')] = colorSelected
		//colorAdd(colorSelected, boxGradientVar)
		//boxGradientVar[]
		controlSelected.style = "background-color: "+ colorSelected
		inputColor.value = ""
		editaBoxGradient(boxGradient, boxGradientVar)
	}
	function colorAdd(elemento,variavel) {
		/*if ((elemento.length ==4 || elemento.length == 5 || elemento.length == 7 || elemento.length == 9) && (elemento.charAt(0)=="#")) {*/
			///if (variavel[2].length==) {}
			variavel[2].push(elemento)
			console.log(variavel)
		/*}else{
			console.log("cor nao suportado")
		}*/
	}

	function gradientVerifica(elemento,boxGradientVar) {
		
		if((boxGradientVar[1][0]=='top' && elemento=="top")||(boxGradientVar[1][0]=='right' && elemento=="right")){
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_'+elemento+'</i>'
			return false
		}if((boxGradientVar[1][0]=='top' && elemento=="bottom")){
			boxGradientVar[1][0]='bottom'
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_down</i>'
			return false
		}else if ((boxGradientVar[1][0]=='bottom' && elemento=="top")) {
			boxGradientVar[1][0]='top'
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_top</i>'
			return false
		}else if ((boxGradientVar[1][0]=='right' && elemento=="left")) {
			boxGradientVar[1][0]=='left'
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_left</i>'
			return false
		}else if((boxGradientVar[1][0]=='left' && elemento=="right")){
			console.log("aa")
			boxGradientVar[1][0]=='right'
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_right</i>'
			return false
		}
		

		if(boxGradientVar[1][1]=='top' && elemento=="bottom"){
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_down</i>'
			boxGradientVar[1][1]='bottom'
			return false
		}
		if (boxGradientVar[1][1]=='bottom' && elemento=="top") {
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_top</i>'
			boxGradientVar[1][1]='top'
			return false
		} 

		if (boxGradientVar[1][1]=="right" && elemento=="left") {
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_left</i>'
			boxGradientVar[1][1]=elemento
			return false
		}
		if(boxGradientVar[1][1]=='left' && elemento=="right"){
			document.querySelector('.btnPaletControlG[data-colorIndex="10"]').innerHTML = '<i class="material-icons">keyboard_arrow_right</i>'
			boxGradientVar[1][1]=elemento
			return false
		}
		
		if(boxGradientVar[1].length < 2){
				boxGradientVar[1].push(elemento)
			}
	}
	function actionBtnMenu(e){
		if (e.currentTarget.classList.contains('radius')) {
			
			disableAllMenu()
			hideAllTab()
			e.currentTarget.classList.add('activar')
			document.querySelector('.boxRadius').classList.remove('tab')
			console.log("radius")

		}else if(e.currentTarget.classList.contains('gradient')){
			
			disableAllMenu()
			e.currentTarget.classList.add('activar')
			hideAllTab()
			console.log("gradient")
			document.querySelector('.boxGradient').classList.remove('tab')

		}
		else if(e.currentTarget.classList.contains('shadow')){
			
			disableAllMenu()
			e.currentTarget.classList.add('activar')
			hideAllTab()
			console.log("shadow")
			document.querySelector('.box-shadow').classList.remove('tab')

		}
	}	

	function exitmodal(e) {
		if (e.target.getAttribute('id')=='slide-all'){
			e.target.classList.remove('active')
		}else if (e.currentTarget.getAttribute('id')=="btnCloseModal") {
			document.querySelector('#slide-all').classList.remove('active')
		} 
	}
	function activeBtnPalleteColor(event) {
		document.querySelector('.activoAction').classList.remove('activoAction')
		event.currentTarget.classList.add('activoAction')
		
	}
	function activeBtnPalleteColorG(event) {
		document.querySelector('.activoActionG').classList.remove('activoActionG')
		event.currentTarget.classList.add('activoActionG')
		
	}
	function addColorContrl(event) {
		const controls = document.querySelectorAll('.btnPaletControl')
		console.log(controls.length)
		if(controls.length < 4){

			document.querySelector('.otherControl').innerHTML +=`<a href="#!" class="btnPaletControl" data-colorIndex='${controls.length}'  style="background-color: #7c4dff">
							<i class="material-icons">color_lens</i>
						</a>`
		}else{return false}
		
		boxShadowVar.push(["0", "4", "20", "2", "#7c4dff"])
		editaBoxShadow(boxShadow,boxShadowVar)
		const controlsBtnColorPalleteShadow = document.querySelectorAll('.btnPaletControl')
		controlsBtnColorPalleteShadow.forEach((item)=>{item.addEventListener('click',activeBtnPalleteColor)})
		controlsBtnColorPalleteShadow.forEach((item)=>{item.addEventListener('dblclick',textRemoveBtn)})
	}
	function addColorContrlG(event) {
		const controls = document.querySelectorAll('.btnPaletControlG')
		//boxShadowVar.push(["0", "4", "20", "2", "tomato"])
		//editaBoxShadow(boxShadow,boxShadowVar)
		//console.log(controls.length)
		if(controls.length < 5){

			document.querySelector('.otherControlG').innerHTML +=`<a href="#!" class="btnPaletControlG" data-colorIndex='${controls.length -1 }'  style="background-color: tomato">
							<i class="material-icons">color_lens</i>
						</a>`
		}
		boxGradientVar[2].push("tomato")
		editaBoxGradient(boxGradient, boxGradientVar)
		const controlsBtnColorPalleteShadowG = document.querySelectorAll('.btnPaletControlG')
		controlsBtnColorPalleteShadowG.forEach((item)=>{item.addEventListener('click',activeBtnPalleteColorG)})

	}

	function hideAllTab(){
		document.querySelectorAll('.item-tab').forEach((item)=>{
			item.classList.add('tab')	
		})
	}
	function disableAllMenu(){
		document.querySelectorAll('.btn-menu').forEach((item)=>{
			item.classList.remove('activar')	
		})
	}
	function modalResultCss(e){
		let stringColorPersonalize = ''
		let stringColorPersonalize2 = ''
		let count = 0
		boxGradientVar[2].forEach((color)=>{
			const iii = (count == boxGradientVar[2].length - 1)?"":","
			console.log(iii)
			count=count+1
			stringColorPersonalize += `<span style='background-color:${color}'>${color}</span>${iii}
			`
			stringColorPersonalize2 += `${color} ${iii}`
		})

		let str = ''
		let str2 = ''
		let count1 = 0
		boxShadowVar.forEach((item)=>{
			const iii = (count1 == boxShadowVar.length - 1)?"":","
			count1 += 1
			str += item[0]+'<span style="color:#ff5722">px</span> '+ item[1]+'<span style="color:#ff5722">px</span> '+ item[2]+'<span style="color:#ff5722">px</span> '+ item[3]+'<span style="color:#ff5722">px</span> <span style="background-color:'+item[4]+'">'+ item[4] +'</span>'+iii
			str2 += item[0]+'px '+ item[1]+'px '+ item[2]+'px '+ item[3]+'px '+ item[4]+'' +iii
		})
		document.getElementById('slide-all').classList.add('active')
		
		document.getElementById('resultMessage').innerHTML = `
		<span style="color: #27ea11;">box-shadow:</span> ${str};<br/>
		<span style="color: #27ea11;">border-radius:</span> ${boxRadiusVar[0]}<span style="color:#ff5722">px</span> ${boxRadiusVar[1]}<span style="color:#ff5722">px</span> ${boxRadiusVar[2]}<span style="color:#ff5722">px</span> ${boxRadiusVar[3]}<span style="color:#ff5722">px;</span> <br/>
		<span style="color: #27ea11;">background: </span><span style="color:#ff5722">linear-gradient</span>( <span style="color:#6884ec">${boxGradientVar[0]}</span> <span style="color:#e91e63">${boxGradientVar[1].join(' ')}</span>, ${stringColorPersonalize} ); `
		document.querySelector('#slide-all').addEventListener('click',exitmodal)
		document.getElementById('cardObjectPreview').setAttribute('style',`border-radius: 
								${boxRadiusVar[0]}px 
								${boxRadiusVar[1]}px 
								${boxRadiusVar[2]}px 
								${boxRadiusVar[3]}px; 
								box-shadow: ${str2};
								background: linear-gradient(${boxGradientVar[0]} ${boxGradientVar[1].join(' ')}, ${stringColorPersonalize2} );`)
	}
	function initReset(event) {
		reloadTheme()

		i = 0;
		boxRadiusVar = ["0", "0", "0", "0"];
		boxGradientVar = ["to",["right"],["#fdd835", "#e040fb"]]
		boxShadowVar = [["0", "0", "0", "0", "#cf4225"]]
		editaBoxShadow(boxShadow,boxShadowVar)
		editaBoxGradient(boxGradient, boxGradientVar)
		editaBox(boxRadius, boxRadiusVar)
		document.querySelector('.otherControl').innerHTML = ''
		document.querySelector('.otherControlG').innerHTML = ''
		document.querySelector('.btnPaletControl').classList.add('activoAction')
	}
	function textRemoveBtn(event) {
		console.log(event)
	}

	function addNewColor(event){
		const colorSelected = allColors[event.currentTarget.getAttribute('data-maven')]
		document.querySelector('.activoAction').style = "background-color:"+colorSelected
		const activoAction = document.querySelector('.activoAction')
		boxShadowVar[activoAction.getAttribute('data-colorIndex')][4] = colorSelected 
		editaBoxShadow(boxShadow, boxShadowVar)
	}
	function addNewColorG(event){
		const controlSelected = document.querySelector('.activoActionG')
		const colorSelected = allColors[event.currentTarget.getAttribute('data-maven')]
		boxGradientVar[2][controlSelected.getAttribute('data-colorIndex')] = colorSelected
		//colorAdd(colorSelected, boxGradientVar)
		//boxGradientVar[]
		controlSelected.style = "background-color: "+ colorSelected 
		editaBoxGradient(boxGradient, boxGradientVar)

	}
	
	function reloadTheme() {
		let i = localStorage.getItem('mavenTemaLeiloes')
		if (i == "light") {
			boxShadowVar = [["0", "4", "20", "2", "#000"]];
			document.querySelector('.activoAction').style = `background-color: #000;`
        }else{
        	boxShadowVar = [["0", "4", "20", "2", "#cf4225"]];
			document.querySelector('.activoAction').style = `background-color: #cf4225;`
        }
	} 
	///Muda os valor do pincel, para activo quando clickado 
    /*window.onmousedown = (evento) => {estadoMove = true}
    window.onmouseup = (evento) => {estadoMove = false}
    window.onmousemove = (evento) =>{
    	if (estadoMove) {}
    }*/
	function copiarText(event) { 
		let texto = document.getElementById(event.currentTarget.getAttribute('data-maven'))
		navigator.clipboard.writeText(texto.innerText)

	}
	function addElementoInBD(event){
		
	}
	document.getElementById('saveElement').addEventListener('click',addElementoInBD)
	function bug(e) {
		console.log(e)
	}
	function longPress(event) {
		if (event.currentTarget.classList.contains('diagonalLeftOut')) {
			boxRadiusVar[0] = Number(boxRadiusVar[0]) - 0.4
		}else if (event.currentTarget.classList.contains('diagonalLeftIn')){
			boxRadiusVar[0] = Number(boxRadiusVar[0]) + 0.4
		}else if (event.currentTarget.classList.contains('diagonalRightOut')){
			boxRadiusVar[1] = Number(boxRadiusVar[1]) - 0.4
		}else if (event.currentTarget.classList.contains('diagonalRightIn')){
			boxRadiusVar[1] = Number(boxRadiusVar[1]) + 0.4
		}else if (event.currentTarget.classList.contains('diagonalRightOutDown')){
			boxRadiusVar[2] = Number(boxRadiusVar[2]) - 0.4
		}else if (event.currentTarget.classList.contains('diagonalRightInDown')){
			boxRadiusVar[2] = Number(boxRadiusVar[2]) + 0.4
		}else if (event.currentTarget.classList.contains('diagonalLeftOutDown')){
			boxRadiusVar[3] = Number(boxRadiusVar[3]) - 0.4
		}else if (event.currentTarget.classList.contains('diagonalLeftInDown')){
			boxRadiusVar[3] = Number(boxRadiusVar[3]) + 0.4
		}
		editaBox(boxRadius, boxRadiusVar)
	}

	
	reloadTheme()  
	btnColors = document.querySelectorAll('.a')
	btnColors = document.querySelectorAll('.a')
	btnColorsG = document.querySelectorAll('.ag')
	btnCopytext = document.getElementById('copiarText')
	btnCopytext.addEventListener('click',copiarText)
	btnColors.forEach((item)=>{item.addEventListener('click',addNewColor)})
	btnColorsG.forEach((item)=>{item.addEventListener('click',addNewColorG)})
	btnsShadow.forEach((item)=>{item.addEventListener('click',actionShadow)})
	btnsRadius.forEach((item)=>{item.addEventListener('click',actionRadius);item.addEventListener('drag',longPress)})
	btnsGradient.forEach((item)=>{item.addEventListener('click',actionGradient)})
	menubtnsLow.forEach((item)=>{item.addEventListener('click',actionBtnMenu)})
	document.querySelector('#btnCloseModal').addEventListener('click',exitmodal)
	document.getElementById('cssResult').addEventListener('click',modalResultCss)
	document.getElementById('add').addEventListener('click',addColorGradient)
	document.getElementById('addColorShadow').addEventListener('click',addColorShadowIn)
	document.querySelector('.btnResetForAll').addEventListener('click',initReset)
	document.querySelector('.addColorPallete').addEventListener('click',addColorContrl)
	document.querySelector('.addColorPalleteG').addEventListener('click',addColorContrlG)
	const controlsBtnColorPalleteShadow = document.querySelectorAll('.btnPaletControl')
	const controlsBtnColorPalleteShadowG = document.querySelectorAll('.btnPaletControlG')
	controlsBtnColorPalleteShadow.forEach((item)=>{item.addEventListener('click',activeBtnPalleteColor)})
	controlsBtnColorPalleteShadow.forEach((item)=>{item.addEventListener('dblclick',textRemoveBtn)})
	controlsBtnColorPalleteShadowG.forEach((item)=>{item.addEventListener('click',activeBtnPalleteColorG)})
})