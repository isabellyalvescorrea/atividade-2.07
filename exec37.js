//37. Faça um algoritmo que leia o nome, o sexo, a altura e a idade de uma pessoa. Calcule e mostre nome e o seu peso
//ideal de acordo com as seguintes características da pessoa:

let prompt = require('prompt-sync')();

let nomePessoa = prompt("Digite o nome: ");
let sexoPessoa = prompt("Digite o sexo (m/f): ");
let altura = parseFloat(prompt("Digite a altura (em metros): "));
let idadePessoa = parseFloat(prompt("Digite a idade: "));
let pesoIdeal;

if (sexoPessoa === "m") {
    if (idadePessoa < 20) pesoIdeal = (altura * 100) - 58;
    else pesoIdeal = (72.7 * altura) - 58;
} else {
    if (idadePessoa < 20) pesoIdeal = (altura * 100) - 44.7;
    else pesoIdeal = (62.1 * altura) - 44.7;
}

console.log("Nome:", nomePessoa);
console.log("Peso ideal:", pesoIdeal.toFixed(2));
