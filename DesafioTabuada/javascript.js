let tabuada = window.document.getElementById('numTab')
let quantValores= window.document.getElementById('qtdTab')
let resultado = window.document.querySelector('p#res')

function calcularTabuada(){
    resultado.innerText = `A tabuada de ${tabuada.value} é: 
    `
    if ((quantValores.value).length == 0 || (tabuada.value).lenth == 0){
        window.alert('[ERRO] Favor inserir valores nos campos')
    }else{
        
        for (let i=1; i <=quantValores.value ; i++){
            let multiplicacao = tabuada.value * i
            resultado.innerHTML += `${tabuada.value} x ${i}= ${multiplicacao} <br>`
            }
        
        }
        tabuada.value = ''
        quantValores.value =''
    
    }
