//Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no
//mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o
//seu nome, o salário fixo e salário no final do mês.

let prompt = require('prompt-sync')();

let nome = (prompt('qual é o seu nome? '));
let salariofixo = parseFloat(prompt('digite o seu salario: '));
let vendas = parseFloat(prompt('digite o total de vendas no mês em R$:'))
let comissao = (vendas * 0.15).toFixed(2);
let salariototal = (salariofixo + comissao * 0.15).toFixed(2);
console.log('o vendedor(a) ' + nome  + ' com o salario fixo de ' +  salariofixo + ' possui um salario total desse mês de: ' + salariototal)