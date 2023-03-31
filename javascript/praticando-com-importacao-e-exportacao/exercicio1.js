/*
    Uma sala contém cinco alunos, e para cada aluno foi sorteado um número de um a 100.
    Faça um programa que receba os cinco números sorteados mostrando o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/
const entradas = [10, 5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
