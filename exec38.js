//Uma Companhia de Seguros possui nove categorias de seguro baseadas na idade e ocupação do segurado. Somente
//pessoas com pelo menos 17 anos e não mais de 70 anos podem adquirir apólices de seguro. Quanto às classes de
//ocupações, foram definidos três grupos de risco. A tabela abaixo fornece as categorias em função da faixa etária e do
//grupo de risco. Dados nome, idade e grupo de risco, determinar a categoria do pretendente à aquisição de tal seguro.
//Imprimir o nome a idade e a categoria do pretendente, e , caso a idade não esteja na faixa necessária, imprimir uma
//mensagem.

let prompt = require('prompt-sync')();

let nomeSegurado = prompt("Digite o nome: ");
let idadeSegurado = parseFloat(prompt("Digite a idade: "));
let grupoRisco = parseFloat(prompt("Digite o grupo de risco (1, 2 ou 3): "));
let categoria;

if (idadeSegurado < 17 || idadeSegurado > 70) {
    console.log("Idade fora da faixa para seguro.");
} else {
    if (idadeSegurado >= 17 && idadeSegurado <= 20) {
        if (grupoRisco === 1) categoria = "Categoria 1";
        else if (grupoRisco === 2) categoria = "Categoria 2";
        else if (grupoRisco === 3) categoria = "Categoria 3";
    } else if (idadeSegurado >= 21 && idadeSegurado <= 24) {
        if (grupoRisco === 1) categoria = "Categoria 2";
        else if (grupoRisco === 2) categoria = "Categoria 3";
        else if (grupoRisco === 3) categoria = "Categoria 4";
    } else if (idadeSegurado >= 25 && idadeSegurado <= 34) {
        if (grupoRisco === 1) categoria = "Categoria 3";
        else if (grupoRisco === 2) categoria = "Categoria 4";
        else if (grupoRisco === 3) categoria = "Categoria 5";
    } else if (idadeSegurado >= 35 && idadeSegurado <= 64) {
        if (grupoRisco === 1) categoria = "Categoria 4";
        else if (grupoRisco === 2) categoria = "Categoria 5";
        else if (grupoRisco === 3) categoria = "Categoria 6";
    } else {
        if (grupoRisco === 1) categoria = "Categoria 7";
        else if (grupoRisco === 2) categoria = "Categoria 8";
        else if (grupoRisco === 3) categoria = "Categoria 9";
    }

    console.log("Nome:", nomeSegurado);
    console.log("Idade:", idadeSegurado);
    console.log("Categoria:", categoria);
}
