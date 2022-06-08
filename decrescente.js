
function pulaLinha(){
    document.write("<br>")
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
let decrescente = 20;

while(decrescente >= 0){
    decrescente = decrescente - 1;
    mostra("O numero decrescente " + decrescente);
}
