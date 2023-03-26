/*
    Desenvolva um algoritmo que dado as três notas tiradas por um aluno em um semestre da faculdade, 
    calcule e imprima a sua média e sua classificação coforme a tabela abaixo:

    Média = (n1 + n2 + n3) / 3

    Média menor que 5: reprovado;
    Média entre 5 e 7: recuperação;
    Média maior que 7: aprovação;
*/

const nota1 = 10;
const nota2 = 3;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media <= 5)
    console.log('Reprovado');
else if (media <= 7)
    console.log('Recuperação');
else
    console.log('Aprovado');