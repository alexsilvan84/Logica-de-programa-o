function pulaLinha(){
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}

let anoCopa = 1930;

while(anoCopa <= 2022){
    mostra(" o ano que teve COPA foi: " + anoCopa);
    anoCopa = anoCopa +4;
}