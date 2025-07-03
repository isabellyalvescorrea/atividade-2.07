
let prompt = require('prompt-sync')();

let valor = parseFloat(prompt('digite o valor do depósito: '));
let rendimentomes = (valor * 0.007)
let total = (valor + rendimentomes).toFixed(2);
console.log('o rendimento do mês é: ' + 'R$' + rendimentomes.toFixed(2));
console.log('o valor total do rendimento é: ' + 'R$' + total);
