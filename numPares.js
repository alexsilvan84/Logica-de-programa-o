function pulaLinha(){
    document.write("<br><br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}

numPares = 2;

if (numPares <= 100){
    while(numPares <= 100){
    mostra("Os númers pares de 1 a 100 são: " + numPares);
    numPares = numPares + 2;
    }
}