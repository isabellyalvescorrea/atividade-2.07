//faça um algoritmo que receba o preço de custo e o preço de venda de 40 produtos. Mostre como resultado se
//houve lucro, prejuízo ou empate para cada produto. Informe media de preço de custo e do preço de venda.

let prompt = require('prompt-sync')();

let somaCusto = 0;
let somaVenda = 0;

for (let i = 1; i <= 40; i++) {
    let custo = parseFloat(prompt(`Digite o preço de custo do produto ${i}: `));
    let venda = parseFloat(prompt(`Digite o preço de venda do produto ${i}: `));

    if (venda > custo) {
        console.log(`Produto ${i}: Lucro`);
    } else if (venda < custo) {
        console.log(`Produto ${i}: Prejuízo`);
    } else {
        console.log(`Produto ${i}: Empate`);
    }

    somaCusto += custo;
    somaVenda += venda;
}

let mediaCusto = somaCusto / 40;
let mediaVenda = somaVenda / 40;

console.log("Média do preço de custo: R$", mediaCusto.toFixed(2));
console.log("Média do preço de venda: R$", mediaVenda.toFixed(2));

