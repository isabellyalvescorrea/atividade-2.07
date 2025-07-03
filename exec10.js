//A Loja Mamão com Açúcar está vendendo seus produtos em 5 (cinco) prestações sem juros. Faça um algoritmo que
//receba um valor de uma compra e mostre o valor das prestações.

let prompt = require('prompt-sync')();

let compra = parseFloat(prompt('digite o valor R$ da compra: '));
let prestacao1 = (compra)/2;
let prestacao2 = (compra)/3;
let prestacao3 = (compra)/4;
let prestacao4 = (compra)/5;
let prestacao5 = (compra)/6;
console.log('o valor da prestação em 2x é: ' + 'R$' + prestacao1.toFixed(2));
console.log('o valor da prestação em 3x é: ' + 'R$' + prestacao2.toFixed(2));
console.log('o valor da prestação em 4x é: ' + 'R$' + prestacao3.toFixed(2));
console.log('o valor da prestação em 5x é: ' + 'R$' + prestacao4.toFixed(2));
console.log('o valor da prestação em 6x é: ' + 'R$' + prestacao5.toFixed(2));