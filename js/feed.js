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
	
reloadTheme()

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
const menubtnsLow = document.querySelectorAll('.btn-menu')
menubtnsLow.forEach((item)=>{item.addEventListener('click',actionBtnMenu)})
document.querySelector('.luzes').addEventListener('click',luzesActionColor)
