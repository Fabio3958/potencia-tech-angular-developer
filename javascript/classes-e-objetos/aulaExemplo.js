class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoa(p1, p2){

    if(p1.idade > p2.idade)
        return `${p1.nome} é mais velho(a) que ${p2.nome}`;
    else if(p1.idade < p2.idade)
        return `${p1.nome} é mais novo(a) que ${p2.nome}`;
    else
        return `${p1.nome} e ${p2.nome} têm a mesma idade`;

}

function main(){

    const fabio = new Pessoa('Fábio', 20);
    const joao = new Pessoa('João', 19);

    console.log(compararPessoa(fabio, joao));

}

main();