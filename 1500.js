let anoInicial = 1500;
let anoAtual = 2022;
let idadeMedia = 28;
let quantGeracao = anoAtual - anoInicial

function pulaLinha(){
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
    mostra("Quantidade de gerações é: " + Math.round(quantGeracao/28));
    pulaLinha();
