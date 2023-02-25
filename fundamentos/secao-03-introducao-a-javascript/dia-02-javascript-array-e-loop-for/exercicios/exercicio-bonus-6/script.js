let valor = 5;
let linha = "";
let asterisco = "*";
let espaco = " ";
// let posicao = valor - 1;


// for (let index = 0; index < valor; index += 1) {
//     linha += asterisco;
//     console.log(linha);
// }

// for (let index = 0; index < valor; index += 1) {
//     for (let index2 = 0; index2 < valor; index2 += 1) {
//         if (index2 < posicao) {
//             linha = linha + " ";
//         } else {
//             linha = linha + "*";
//         }
//     }
//     console.log(linha);
//     linha = "";
//     posicao -= 1;
// }

for (let index = 1; index <= valor; index += 1) {
    linha = espaco.repeat(valor - index) + asterisco.repeat(index);
    console.log(linha);
}