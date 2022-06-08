
/*
let altura = 160
let peso =  59;
let imc = peso / (altura * altura);
}*/
function alturaImc(alturaimc){
    return alturaimc;
}
function pesoImc(pesoimc){
    return pesoimc;
}
let seuNome = prompt("Qual seu nome? ");
let alturaimc = prompt(seuNome + " Digite sua altura: ");
let pesoimc = prompt(seuNome + " Digite sua peso: ");
let imc = pesoimc / (alturaimc * alturaimc);
mostra(seuNome + " seu IMC é " + imc);
if(imc < 18.5){
    mostra("Você está abaixo do recomendado");
} else if(imc > 35){
    mostra("Você está acima do recomendado");
} else if(imc >=18.5 && imc <=35){
    mostra("Você está no peso ideal");
}
var numero = 10;
if(numero >= 2 && numero < 12){

    mostra("ENTROU! A");
}
if(numero >= 10) {

    mostra("ENTROU! C");
}