function pulaLinha(){
    document.write("<br><hr><br>");
}
function mostra(frase){
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

let anoAtual = 2022
mostra("Eu nasci em : " + (anoAtual - 37));
mostra("Adriano nasceu em: " + (anoAtual - 26));
mostra("Paulo nasceu em: " + (anoAtual - 32));