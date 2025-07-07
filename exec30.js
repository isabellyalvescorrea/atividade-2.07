//Faça um algoritmo que receba o nome a idade, o sexo e salário fixo de um funcionário. Mostre o nome e o salário

let prompt = require('prompt-sync')();

let nomeFuncionario = prompt("Digite o nome do funcionário: ");
let idadeFuncionario = parseFloat(prompt("Digite a idade: "));
let sexoFuncionario = prompt("Digite o sexo (m/f): ");
let salarioFixo = parseFloat(prompt("Digite o salário fixo: "));

let salarioLiquido;

if (sexoFuncionario === "m") {
    if (idadeFuncionario >= 30) {
        salarioLiquido = salarioFixo + 100;
    } else {
        salarioLiquido = salarioFixo + 50;
    }
} else if (sexoFuncionario === "f") {
    if (idadeFuncionario >= 30) {
        salarioLiquido = salarioFixo + 200;
    } else {
        salarioLiquido = salarioFixo + 80;
    }
} else {
    salarioLiquido = salarioFixo;
}

console.log("Nome:", nomeFuncionario);
console.log("Salário líquido: R$", salarioLiquido.toFixed(2));
