/*
    Crie uma classe para representar pessoas. Cada pessoa terá os seguintes atributos:
    - nome;
    - peso;
    - altura;
    
    As pessoas devem ter a capacidade de dizer seu IMC (peso / (altura * altura)).

    Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura, depois, peça ao José para dizer seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = (peso / Math.pow(altura, 2)).toFixed(2);
    }

    classificarImc() {
        const imc = this.peso / Math.pow(this.altura, 2);
        
        if (imc < 18.5)
            return 'Abaixo do peso';
        else if (imc < 25)
            return 'Peso normal';
        else if (imc < 30)
            return 'Acima do peso';
        else if (imc < 40)
            return 'Obesidade';
        else
            return 'Obesidade grave';
    }
}

function main() {
    const jose = new Pessoa('José', 70, 1.75);
    const classificacaoImc = jose.classificarImc();
    console.log(`${jose.nome} tem um IMC de ${jose.imc}, que é classificado como ${classificacaoImc}`);
}

main();