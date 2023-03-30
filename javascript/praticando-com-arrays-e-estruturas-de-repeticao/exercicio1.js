// Crie um programa que receba um número e imprima sua tabuada.

function tabuada(number){

    for (let i = 1; i <= 10; i++){
        console.log(number * i);
    }

}

function main(){
    tabuada(7);
}

main();