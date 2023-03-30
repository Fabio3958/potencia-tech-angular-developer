// declaração de arrays
const alunos = ['Fábio', 'João', 'Vitor', 'Renan'];

// selecionar um elemento dentro do array
const aluno = alunos[1];
console.log(aluno);

// push adiciona o novo elemento no final do array
alunos.push('Larissa');
console.log(alunos);

// pop apaga o último elemento do array
alunos.pop();
console.log(alunos);

// shift apaga o primeiro elemento do array
alunos.shift();
console.log(alunos);

// o elemento da posição 3 receberá a nova atribuição
alunos[3] = 'Mateus';
console.log(alunos);

// arrays podem comportar tipos diferentes de dados
const array = ['Teste', 10, 21.2, true];
console.log(array);

// length retorna o tamanho do array
console.log(array.length);
