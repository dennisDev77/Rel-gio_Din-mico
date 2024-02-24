//Comecando a por o nosso relogio a funcionar

const horas=document.getElementById("hora")
const minutos=document.getElementById("minuto")
const segundos=document.getElementById("segundo")

 setInterval(function(){
    let dataHoje=new Date()
    let hr=dataHoje.getHours()
    let min=dataHoje.getMinutes()
    let seg=dataHoje.getSeconds()


    if(hr<10) hr='0'+hr
    if(min<10) min='0' +min
    if(seg<10) seg='0'+seg
     
    horas.textContent=hr
    minutos.textContent=min
    segundos.textContent=seg
 }
 
 
 
 )