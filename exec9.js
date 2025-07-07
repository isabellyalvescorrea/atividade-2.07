//9. Faça um algoritmo que receba um valor que foi depositado e exiba o valor com rendimento após um mês.
//Considere fixo o juro da poupança em 0,70% a. m.

let prompt = require('prompt-sync')();

let valor = parseFloat(prompt('digite o valor do depósito: '));
let rendimentomes = (valor * 0.007)
let total = (valor + rendimentomes).toFixed(2);
console.log('o rendimento do mês é: ' + 'R$' + rendimentomes.toFixed(2));
console.log('o valor total do rendimento é: ' + 'R$' + total);
