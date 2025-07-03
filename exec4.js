let prompt = require('prompt-sync')();

let nome = (prompt('qual é o seu nome? '));
let salariofixo = parseFloat(prompt('digite o seu salario: '));
let vendas = parseFloat(prompt('digite o total de vendas no mês em R$:'))
let comissao = (vendas * 0.15).toFixed(2);
let salariototal = (salariofixo + comissao * 0.15).toFixed(2);
console.log('o vendedor(a) ' + nome  + ' com o salario fixo de ' +  salariofixo + ' possui um salario total desse mês de: ' + salariototal)