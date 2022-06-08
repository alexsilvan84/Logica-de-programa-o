function pulaLinha(){
    document.write("<br><br>");
}
function mostra(frase){
    document.write(frase);
}

let login = "alex";
let senha = "123";

let loginInformado = prompt("Informe o nome do usuário: ");
let senhaInformada = prompt("Informe a senha do usuário" + loginInformado);
tentativas = 3;
loginCerto = 1;
while(loginCerto <= tentativas){
if (loginInformado == login && senhaInformada == senha){
mostra  ("Bem vindo ao Sistema " + loginInformado);
    loginCerto = tentativas;
} else {
    if (tentativas == 3){
        mostra("Número permitido de tentativas ultrapassado!");
    } else{
    mostra("Login incorreto, tente novamente");
    }
}
loginCerto = tentativas + 1;
}

/**
    var loginCadastrado = "alex";
    var senhaCadastrada = "123";

    var maximoTentativas = 3;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {

        var loginInformado = prompt("Informe seu login");
        var senhaInformada = prompt("Informe sua senha");

        if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

            alert("Bem-vindo ao sistema, " + loginInformado);

            tentativaAtual = maximoTentativas; // acertou, então faço o gasto de todas as tentativas para sair do loop. Lá embaixo vai incrementar + 1! 

        } else {

            if (tentativaAtual == 3) {
                alert("Número permitido de tentativas ultrapassado!");
            } else {
                alert("Login inválido. Tente novamente");
            }
        }

       // vai para a próxima tentativa
        tentativaAtual = tentativaAtual +1  
    }
 */

    /*
    var idade = parseInt(prompt("Digite sua idade"));

    while( isNaN() ) {
        idade = parseInt(prompt("Digite sua idade"));    
    }
    
    alert(idade);
    */
    