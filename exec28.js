//Escrever um algoritmo para uma empresa que decide dar um reajuste a seus 584 funcionários de acordo com os
//seguintes critérios:
//a) 50% para aqueles que ganham menos do que três salários mínimos;
//b) 20% para aqueles que ganham entre três até dez salários mínimos;
//c) 15% para aqueles que ganham acima de dez até vinte salários mínimos;
//d) 10% para os demais funcionários.
//Leia o nome do funcionário, seu salário e o valor do salário mínimo. Calcule o seu novo salário reajustado. Escrever o
//nome do funcionário, o reajuste e seu novo salário. Calcule quanto à empresa vai aumentar sua folha de pagamento.

let salarioMin = 1412;
let salarioAtual = 4000;
let nomeFunc = "Ana";
let reajuste;

if (salarioAtual < salarioMin * 3) reajuste = salarioAtual * 0.5;
else if (salarioAtual <= salarioMin * 10) reajuste = salarioAtual * 0.2;
else if (salarioAtual <= salarioMin * 20) reajuste = salarioAtual * 0.15;
else reajuste = salarioAtual * 0.1;

let novoSalario = salarioAtual + reajuste;

console.log("Nome:", nomeFunc);
console.log("Reajuste:", reajuste);
console.log("Novo Salário:", novoSalario);
