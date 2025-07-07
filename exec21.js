//Escrever um algoritmo que leia os dados de “N” pessoas (nome, sexo, idade e saúde) e informe se está apta ou não
//para cumprir o serviço militar obrigatório. Informe os totais.

let prompt = require('prompt-sync')();

let nome = prompt("qual é o seu nome? ");
let sexo = prompt("Digite o sexo (m/f): ");
let idade = parseFloat(prompt("qual é a sua idade? "));
let saude = prompt("Como está a sua saúde? (boa/ruim): ");

if (sexo === "m" && idade >= 18 && saude === "boa") {
    console.log(nome + " você está apto para o serviço militar.");
} else {
    console.log(nome + " você não está apto para o serviço militar.");
}
