document.write("<h3>consumo do carro em km/l</h3>");

var tanque = 40;
var caminhoComGasolina = 480;
var caminhoComAlcool = 300;
var consumoAlcool = (caminhoComAlcool/tanque);
var consumoGasolina = (caminhoComGasolina/tanque);
var combustivel = prompt("Qual combustível?");


if(combustivel == "gasolina" || combustivel == "Gasolina" || combustivel == "GASOLINA"){
    document.write("O consumo com gasolina é " + consumoGasolina + " km/l");
    document.write("<br>");
}else if(combustivel == "alcool" || combustivel == "Alcool" || combustivel == "ALCOOL"){
    document.write("O consumo com alcool é " + consumoAlcool + " km/l");
} else{
    document.write("<br>");
    document.write("Digite Alcool ou Gasolina");
}