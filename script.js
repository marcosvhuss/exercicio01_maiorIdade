let nome = prompt('Digite o seu nome:');
let idade;
let inputIdade;

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
