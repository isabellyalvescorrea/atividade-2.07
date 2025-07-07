//Escrever um algoritmo que leia dois valores inteiro distintos e informe qual é o maior.

let prompt = require ('prompt-sync')();

let numero1 = parseFloat(prompt('Digite um numero inteiro: '));
let numero2 = parseFloat(prompt('digite outro numero inteiro: '));
if (numero1 > numero2) {
    console.log('o numero ' + numero1 + ' é maior que ' + numero2);
}else{
console.log('o numero ' + numero2 + ' é maior que ' + numero1);
}