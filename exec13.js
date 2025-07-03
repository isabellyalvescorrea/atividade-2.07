//Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10

let prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Digite um numero: '));
if (numero > 10) {
    console.log('o numero ' + numero + ' é maior que 10');
}else{
console.log('o numero ' + numero + ' é menor que 10' );
}