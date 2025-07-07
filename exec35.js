//35. Elabore um algoritmo que, dada a idade de um nadador. Classifique-o em uma das seguintes categorias:
// • Infantil A = 5 - 7 anos
// • Infantil B = 8 - 10 anos
// • juvenil A = 11- 13 anos
// • juvenil B = 14 - 17 anos
// • Sênior = 18 - 25 anos
// Apresentar mensagem “idade fora da faixa etária” quando for outro ano não contemplado

let prompt = require('prompt-sync')();

let idadeNadador = parseFloat(prompt("Digite a idade do nadador: "));

if (idadeNadador >= 5 && idadeNadador <= 7) console.log("Infantil A");
else if (idadeNadador >= 8 && idadeNadador <= 10) console.log("Infantil B");
else if (idadeNadador >= 11 && idadeNadador <= 13) console.log("Juvenil A");
else if (idadeNadador >= 14 && idadeNadador <= 17) console.log("Juvenil B");
else if (idadeNadador >= 18 && idadeNadador <= 25) console.log("Sênior");
else console.log("Idade fora da faixa etária.");
