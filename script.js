const teclas = document.getElementsByClassName('tecla');
const visor = document.getElementById('visor')


for(let i = 0; i < teclas.length; i++){
    teclas[i].addEventListener('click', function(){
        value = teclas[i].innerHTML;
        console.log(value);
        inserir(value);
    })
}

function inserir(valor){
    let nums = visor.innerHTML;
    visor.innerHTML = nums + valor;
} 

function limpar(){
    visor.innerHTML = '';
}

function apagar(){
    let nums = visor.innerHTML;
    let numString = nums.split('');
    numString.pop()
    numString = numString.join('');
    visor.innerHTML = numString;
}

//converter para array
//se tiver um ponto, encontrar uma forma de selecionar o espaço entre sinais para juntar
//fazer as operações aritméticas
//entregar o resultado 