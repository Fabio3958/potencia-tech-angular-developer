// forma mais simples de declarar um objeto (objeto literal)
const pessoa = {
    nome: 'Fábio',
    idade: 20,

    // criação de método
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`);
    }
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);
console.log('----------------//------------------');

// atribuição de nova característica
pessoa.altura = 1.7;

console.log(pessoa);
console.log('----------------//------------------');

// deletar atributo de um objeto
delete pessoa.altura;

console.log(pessoa);
console.log('----------------//------------------');

// invocação de método
pessoa.descrever();
console.log('----------------//------------------');

// métodos também podem ser modificados
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`)
}
pessoa.descrever();
console.log('----------------//------------------');

// outra sintaxe para acessar atributos
console.log(pessoa['nome']);
console.log('----------------//------------------');