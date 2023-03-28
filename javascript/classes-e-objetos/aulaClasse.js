// criação de classe
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    // método construtor
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade. Nasci em ${this.anoDeNascimento}`);
    }
}

// instância de classe
const fabio = new Pessoa('Fábio', 20);

fabio.descrever();

