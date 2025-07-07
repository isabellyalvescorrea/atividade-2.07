//Desenvolva um algoritmo que informe o valor de um determinado produto com as seguintes condições:
//Valor para pagamento a vista com desconto de 15%;
//Valor para pagamento a prazo com acrescimento de 15%
//Valor parcelado de 24x com juros simples de 20%

let prompt = require('prompt-sync')();

let precoProduto = parseFloat(prompt("Digite o preço do produto: "));

let descontoVista = precoProduto * 0.15;
let acrescimoPrazo = precoProduto * 0.15;
let jurosParcelado = precoProduto * 0.20;

let valorVista = precoProduto - descontoVista;
let valorPrazo = precoProduto + acrescimoPrazo;
let valorParcelado = precoProduto + jurosParcelado;
let valorParcela = valorParcelado / 24;

console.log("Valor à vista com 15% de desconto: R$", valorVista.toFixed(2));
console.log("Valor a prazo com 15% de acréscimo: R$", valorPrazo.toFixed(2));
console.log("Valor parcelado (24x) com 20% de juros: R$", valorParcelado.toFixed(2));
console.log("Valor de cada parcela: R$", valorParcela.toFixed(2));
