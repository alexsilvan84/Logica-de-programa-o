function pulaLinha(){
    document.write("<br><br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}

num3040 = 30;

    while(num3040 <= 40){
        if (num3040 == 33){
            num3040 = num3040 +1
        }
        if (num3040 == 37){
            num3040 = num3040 +1
        } else{
            mostra("Os numero são" +num3040);
            num3040 = num3040 + 1;
        }
    }
