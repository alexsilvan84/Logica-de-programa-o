
function pulaLinha(){
    document.write("<br>")
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}
let idade = parseInt(prompt("Qual sua idade?"));
let temHabilitacao = prompt("Tem habilitação? Responda S ou N");

    if(idade >= 18 && temHabilitacao == "S" || idade >= 18 && temHabilitacao == "s") {
        mostra("Você pode dirigir!");    
    } else if(idade <= 17 && temHabilitacao == "N" || idade <= 17 && temHabilitacao == "n"){
        mostra("Você é menor de idade e não pode ter habilitação, não pode dirigir");
    } else if(idade >= 18 && temHabilitacao == "N" || idade >= 18 && temHabilitacao == "n"){
        mostra("Você é maior de idade, mas não tem habilitação e não pode dirigir");
    } else if(idade <=17 && temHabilitacao == "S" || idade <=17 && temHabilitacao == "s"){
        mostra("Você é de menor, não pode ter habilitação");
    } else{
        mostra("Resposta fora do padrão.");
    }