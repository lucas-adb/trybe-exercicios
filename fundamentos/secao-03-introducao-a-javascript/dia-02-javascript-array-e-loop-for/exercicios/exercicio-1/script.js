let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let biggestNumber = 0;
let smallestNumber; 

// #1 Percorra o array imprimindo todos os valores contidos nele com a função console.log(). 

for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sumNumbers += numbers[index];
}

// #2 Some todos os valores contidos no array e imprima o resultado.

console.log("Soma de todos os valores no array é " + sumNumbers);

// #3 Calcule e imprima a média aritmética dos valores contidos no array.
// #4 Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

let media = sumNumbers / numbers.length;
// console.log(media);
if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
};

// #5 Utilizando for, descubra o maior valor contido no array e imprima-o.

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggestNumber) {
        biggestNumber = numbers[index];
    } 
}

console.log("O maior número é: " + biggestNumber);

// #6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let oddNumbers = [];

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        // console.log(numbers[index] + " é ímpar");
        oddNumbers.push(numbers[index]); }
    // } else {
    //     // console.log(numbers[index] + " é par");
    // }
} 

console.log("Array de números primos: " + oddNumbers);
// console.log("Quantidade de números primos: " + oddNumbers.length);

if (oddNumbers.length > 0) {
    console.log("Quantidade de números primos: " + oddNumbers.length);
} else {
    console.log("Nenhum valor ímpar encontrado");
};


// #7 Utilizando for, descubra o menor valor contido no array e imprima-o.

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smallestNumber || smallestNumber == undefined) {
        smallestNumber = numbers[index];
    } 
}

console.log("O menor número é: " + smallestNumber);

// #8 Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let array25 = [];

for (let index2 = 1; index2 <= 25; index2 += 1) {
    array25.push(index2);
}

console.log(array25);

// #9 Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2

let array25Division = [];

for (index2 = 0; index2 < array25.length; index2 += 1) {
    array25Division.push (array25[index2] / 2);
}

console.log(array25Division);
