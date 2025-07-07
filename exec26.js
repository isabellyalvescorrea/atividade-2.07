//26. Faça um algoritmo que leia um número de 1 a 5 e escreva por extenso. Caso o usuário digite um número que não
//esteja neste intervalo, exibir mensagem: número inválido.

let prompt = require('prompt-sync')();

let numeroExtenso = parseFloat(prompt("Digite um número de 1 a 5: "));

switch (numeroExtenso) {
    case 1: console.log("Um"); break;
    case 2: console.log("Dois"); break;
    case 3: console.log("Três"); break;
    case 4: console.log("Quatro"); break;
    case 5: console.log("Cinco"); break;
    default: console.log("Número inválido");
}
