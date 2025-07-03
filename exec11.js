//Faça um algoritmo que receba o preço de custo de um produto e mostre o valor de venda. Sabe-se que o preço de
//custo receberá um acréscimo de acordo com um percentual informado pelo usuário

let prompt = require('prompt-sync')();

let precocusto = parseFloat(prompt('digite o custo do produto: '));
let percentual = parseFloat(prompt('digite o percentual (%): '));
let acrescimo = precocusto * percentual;
let venda = precocusto + acrescimo;
console.log('o valor de venda do produto é: R$' + venda.toFixed(2));