// TRIANGULO NORMAL

// let base = 5;
// let simbolo = "*";
// let linha = "";

// for (let index = 0; index <= base; index += 1) {
//     console.log(linha);
//     linha += simbolo;
// }

// TRIANGULO INVERTIDO

// let base = 5;
// let simbolo = '*';
// let linha = '';
// let posicao = base - 1;

// for (let index = 0; index < base; index += 1) {
//     for (let index2 = 0; index2 < base; index2 += 1) {
//         if (index2 < posicao) {
//             linha = linha + ' ';
//         } else {
//             linha = linha + "*";
//         }
//     }
//     console.log(linha);
//     linha = '';
//     posicao -= 1;
// }

// PIRAMIDE

let base = 5;
let simbolo = '*';
let linha = '';
let meio = (base + 1) / 2;
let altura = (base + 1) / 2;
let ladoE = meio;
let ladoD = meio;

for (let index = 0; index <= altura; index += 1) {
    for (let index2 = 0; index2 <= base; index2 += 1) {
        if (index2 > ladoE && index2 < ladoD) {
            linha = linha + "*";
        } else {
            linha = linha + " ";
        }
    }
    console.log(linha);
    linha = '';
    ladoE -= 1;
    ladoD += 1;
}