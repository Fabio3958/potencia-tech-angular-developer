// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

function isElementEven(array = []) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0)
            console.log(array[i])
    }
}

function main(){
    isElementEven(array = [1, 5, 2, 4, 8, 9, 10, 12, 15, 20, 54, 71, 100])
}

main();