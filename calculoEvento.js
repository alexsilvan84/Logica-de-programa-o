function pulaLinha(){
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}

let toalEventos = parseInt(prompt("Informe o total de eventos: "));

let contador = 1;
let totalGastoEventos = 0;

while(contador <= toalEventos){
    let gasto = parseFl(prompt("Informe o total de gasto com evento "));
    totalGastoEventos = totalGastoEventos + gasto;
    contador++;
   
}
let media = totalGastoEventos / toalEventos;

mostra("A média de gastos é " + media);

