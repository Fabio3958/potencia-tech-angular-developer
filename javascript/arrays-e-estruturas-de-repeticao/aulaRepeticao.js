notas = [];
notas.push(10);
notas.push(5);
notas.push(8);

let soma = 0;
// declaração do for
for (let i = 0; i < notas.length; i++) {
    
    soma = soma + notas[i]
    
}
const media = soma / notas.length;

console.log(media.toFixed(2));

// estrutura de repetição podem percorrer strings
const nome = 'Fábio';
for (let j = 0; j < nome.length; j++) {
    console.log(nome[j]);
}