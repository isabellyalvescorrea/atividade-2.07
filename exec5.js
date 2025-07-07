//Escrever um algoritmo que leia o nome de um aluno e as notas das três provas que ele obteve no semestre. No final
//informar o nome do aluno e a sua média (aritmética).

let prompt = require('prompt-sync')();

let nome = (prompt('digite o nome do aluno: '));
let nota1 = parseFloat(prompt('digite a primeira nota obtida no semestre'));
let nota2 = parseFloat(prompt('digite a segunda nota'));
let nota3 = parseFloat(prompt('digite a terceira nota'));
let media = (nota1 + nota2 + nota3)/2;
console.log('o aluno ' + nome + ' possui uma média de: ' + media)