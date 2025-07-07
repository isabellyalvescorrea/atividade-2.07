//A concessionária de veículos “CARANGO VELHO” está vendendo os seus veículos com desconto. Faça um
//algoritmo que calcule e exiba o valor do desconto e o valor a ser pago pelo cliente de vários carros. O desconto
//deverá ser calculado de acordo com o ano do veículo. Até 2000 - 12% e acima de 2000 - 7%. O sistema deverá
//perguntar se deseja continuar calculando desconto até que a resposta seja: “(N) Não” . Informar total de carros com
//ano até 2000 e total geral.

let prompt = require('prompt-sync')();

let total2000 = 0;
let totalGeral = 0;

while (true) {
let valor = parseFloat(prompt("Digite o valor do carro: "));
let ano = parseFloat(prompt("Digite o ano do carro: "));

let desconto;
if (ano <= 2000) {
desconto = valor * 0.12;
total2000 = total2000 + 1;
} else {
desconto = valor * 0.07;
}

let valorFinal = valor - desconto;

console.log("Desconto: R$ " + desconto.toFixed(2));
console.log("Valor a pagar: R$ " + valorFinal.toFixed(2));

totalGeral = totalGeral + 1;

let continuar = prompt("Deseja continuar calculando desconto? (S/N): ");
if (continuar.toUpperCase() === "N") {
break;
}
}

console.log("Total de carros com ano até 2000: " + total2000);
console.log("Total geral de carros: " + totalGeral);
