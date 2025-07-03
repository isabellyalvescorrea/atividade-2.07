//O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos
//impostos (aplicados, primeiro os impostos sobre o custo de fábrica, e depois a percentagem do distribuidor sobre o
//resultado). Supondo que a percentagem do distribuidor seja de 28% e os impostos 45%. Escrever um algoritmo que
//leia o custo de fábrica de um carro e informe o custo ao consumidor do mesmo.

let prompt = require('prompt-sync')();
let custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));
let percentualDistribuidor = 0.28;
let impostos = 0.45;
let custoDistribuidor = custoFabrica * percentualDistribuidor;
let custoImpostos = custoFabrica * impostos;
let custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;
console.log('O custo ao consumidor do carro é: R$ ' + custoConsumidor.toFixed(2));