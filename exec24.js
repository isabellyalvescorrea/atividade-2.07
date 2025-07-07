//Faça um algoritmo que receba “N” números e mostre positivo, negativo ou zero para cada número.

let prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));

function classificar(num) {
    if (num > 0) return "Positivo";
    else if (num < 0) return "Negativo";
    else return "Zero";
}

console.log("Número 1:", classificar(numero1));
console.log("Número 2:", classificar(numero2));
console.log("Número 3:", classificar(numero3));
