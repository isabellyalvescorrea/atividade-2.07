//Faça um algoritmo que leia dois números e identifique se são iguais ou diferentes. Caso eles sejam iguais imprima
//uma mensagem dizendo que eles são iguais. Caso sejam diferentes, informe qual número é o maior, e uma
//mensagem que são diferentes.

let prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));

if (numero1 === numero2) {
    console.log("Os números são iguais.");
} else {
    console.log("Os números são diferentes.");
    if (numero1 > numero2) {
        console.log(numero1 + " é maior.");
    } else {
        console.log(numero2 + " é maior.");
    }
}
