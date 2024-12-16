let nome = prompt('Digite o seu nome:');
let idade;
let inputIdade;
let mensagemPersonalizada = 'Você é o personagem do filme Matrix!'

// Continua solicitando até que uma idade válida seja fornecida
do {
    inputIdade = prompt('Digite a sua idade:');
    idade = parseInt(inputIdade);

    if (isNaN(idade)) {
        alert("Por favor, insira uma idade válida!");
    }
} while (isNaN(idade)); // Repete enquanto a entrada não for um número

// Verifica se o usuário é maior ou menor de idade
let maiorMenor = (idade >= 18) ? 'maior' : 'menor';
document.write(`Olá ${nome}, você é ${maiorMenor} de idade!`);

// Condição especial para "Thomas Anderson"
/*if (nome === "Thomas Anderson" && maiorMenor === 'maior') {
    document.write(`Olá ${nome}, você é MAIOR de idade. Você é personagem do filme The Matrix!`);
} else {
    document.write(`Olá ${nome}, você é ${maiorMenor} de idade!`);
}
*/

switch (nome) {
    case 'Thomas Anderson':
        document.write(mensagemPersonalizada)
        break
    case 'thomas anderson':
        document.write(mensagemPersonalizada)
        break
    case 'THOMAS ANDERSON':
        document.write(mensagemPersonalizada)
        break
    case 'Thomas anderson':
        document.write(mensagemPersonalizada)
        break
}