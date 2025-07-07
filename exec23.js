//Faça um algoritmo que receba um número e mostre uma mensagem caso este número sege maior que 80, menor
//que 25 ou igual a 40.

let prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um número: "));

if (numero > 80 || numero < 25 || numero === 40) {
    console.log("Número especial!");
} else {
    console.log("Número comum.");
}