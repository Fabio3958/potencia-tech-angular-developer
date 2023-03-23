/* 
    Desenvolva um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis, sendo elas:
    - Preço do etanol
    - Preço da gasolina
    - Tipo do combustível que está no seu carro
    - Gasto médio de combustível do carro por KM
    - Distância da viagem em KM

    Imprima no console o valor que será gasto para completar essa viagem.
*/

const precoEtanol = 4;
const precoGasolina = 5.6;
const tipoCombustivel = 'Gasolina';
const gastoMedioPorKm = 12;
const distanciaEmKm = 100;

let litrosPorViagem = distanciaEmKm / gastoMedioPorKm;
let valorGasto;

if (tipoCombustivel === 'Gasolina') {
    valorGasto = litrosPorViagem * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosPorViagem * precoEtanol;
    console.log(valorGasto.toFixed(2));
}
