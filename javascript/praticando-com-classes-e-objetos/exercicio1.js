/*
    Crie uma classe para representar carros.
    Os carros possuem:
    - marca
    - cor
    - consumo médio de combustível por km rodado.

    Crie um método que dado a quantidade de km e o preço do combustível, retorne o valor gasto em reais
    para realizar esse percurso.
*/

class Carro{
    marca;
    cor;
    consumoPorKm;

    constructor(marca, cor, consumoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm;
    }

    calcularGasto(distanciaEmKm, precoCombustivel){
        return (distanciaEmKm * this.consumoPorKm) * precoCombustivel
    }
} 

function main(){

    const distanciaEmKm = 100;
    const precoCombustivel = 5.65
    const uno = new Carro('Fiat', 'Preto', 1 / 12);
    const totalGasto = uno.calcularGasto(distanciaEmKm, precoCombustivel);
    

    console.log(`O total gasto em reais será: R$${totalGasto.toFixed(2)}`);

}

main();

