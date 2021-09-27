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
    let numConvert = nums.split('');
    numConvert.pop()
    numConvert = numConvert.join('');
    visor.innerHTML = numConvert;
}

function calcularIgual(){
    let resultado = document.getElementById('visor').innerHTML;
    if(resultado)
    {
        document.getElementById('visor').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('visor').innerHTML = "0"
    }
}