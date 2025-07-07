//Faça um algoritmo que receba dois números e ao final mostre a soma, subtração, multiplicação e a divisão dos
//números lidos.

let prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('digite o primeito nr: '));
let numero2 = parseFloat(prompt('digite o segundo nr: '));
let resultado1 = (numero1 + numero2)
let resultado2 = (numero1 - numero2)
let resultado3 = (numero1 * numero2)
let resultado4 = (numero1 / numero2).toFixed(2);

console.log('o resultado da soma é: ' + resultado1);
console.log('o resultado da subtração é: ' + resultado2);
console.log('o resultado da multiplicação é: ' + resultado3);
console.log('o resultado da divisão é: ' + resultado4);