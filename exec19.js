//Escrever um algoritmo que leia o nome e o sexo de 56 pessoas e informe o nome e se ela é homem ou mulher. No
//final informe total de homens e de mulheres.

let prompt = require('prompt-sync')();

let sexohomens = 0;
let sexomulheres = 0;

for (let i = 1; i <= 56; i++) {
    let nome = prompt('Qual é o seu nome? ');
    let sexo = prompt('Qual o seu sexo? f ou m: ').toLowerCase();

    if (sexo === 'f') {
        sexomulheres++;
        console.log(nome + ', você é do sexo feminino.');
    } else if (sexo === 'm') {
        sexohomens++;
        console.log(nome + ', você é do sexo masculino.');
    } else {
        console.log(nome + ', sexo não definido.');
    }
}

{ console.log('Total de mulheres: ' + sexomulheres); }
{console.log('Total de homens: ' + sexohomens); }


