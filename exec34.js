//A escola “APRENDER” faz o pagamento de seus professores por hora/aula. Faça um algoritmo que calcule e exiba o
//salário de um professor. Sabe-se que o valor da hora/aula segue a tabela abaixo:
//Professor Nível 1 R$12,00 por hora/aula
//• Professor Nível 2 R$17,00 por hora/aula
//• Professor Nível 3 R$25,00 por hora/aula

let prompt = require('prompt-sync')();

let nivel = parseFloat(prompt("Digite o nível do professor (1, 2 ou 3): "));
let horas = parseFloat(prompt("Digite a quantidade de horas aula: "));
let valorHora;

if (nivel === 1) valorHora = 12;
else if (nivel === 2) valorHora = 17;
else if (nivel === 3) valorHora = 25;
else valorHora = 0;

let salario = horas * valorHora;
console.log("Salário do professor: R$ " + salario.toFixed(2));
