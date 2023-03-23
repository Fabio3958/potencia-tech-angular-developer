/* Desenvolva um programa para calcular o valor gasto de combustível em uma viagem

   Você terá 3 variáveis, sendo elas:
   - Preço do combustível
   - Gasto médio de combustível por KM
   - Distância em KM da viagem

   Imprima no console o valor que será gasto de combustível para realizar a viagem
*/

const precoCombustivel = 5.6;
const gastoPorKm = 12;
const distanciaEmKm = 100;

let litrosPorViagem = distanciaEmKm / gastoPorKm;
let valorGasto = litrosPorViagem * precoCombustivel;

console.log(valorGasto.toFixed(2));