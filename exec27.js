//A concessionária de veículos “CARANGO” está vendendo os seus veículos com desconto. Faça um algoritmo que
//calcule e exiba o valor do desconto e o valor a ser pago pelo cliente. O desconto deverá ser calculado sobre o valor
//do veículo de acordo com o combustível (álcool – 25%, gasolina – 21% ou diesel –14%). Com valor do veículo zero
//encerra entrada de dados. Informe total de desconto e total pago pelos clientes.

let valor = 30000;
let tipo = "gasolina";
let desc;

if (tipo === "alcool") desc = valor * 0.25;
else if (tipo === "gasolina") desc = valor * 0.21;
else if (tipo === "diesel") desc = valor * 0.14;
else desc = 0;

let totalPago = valor - desc;
console.log("Desconto:", desc);
console.log("Total a pagar:", totalPago);
