let valor = 7;
let asterisco = "*";
let linha = "";
let espaco = " ";
let posicao = valor - 1;
let altura = (valor + 1) / 2
let meio = altura - 1;

// Piramide com a base para a esquerda

// for (i = 0; i < valor; i += 1) {
//     linha = linha + asterisco;
//     console.log(linha);
// }

// Piramide com a base para a direita

// for (j = 0; j < valor; j += 1) {
//     for (i = 0; i < valor; i += 1) {
//         if (i < posicao) {
//             linha = linha + espaco;
//         } else {
//             linha = linha + asterisco;
//         }
//     }
//     console.log(linha);
//     posicao -= 1;
//     linha = "";

// }

// T invertido

// for (j = 0; j < altura; j += 1) {
//     if (j !== (altura - 1)) {
//         for (i = 0; i < valor; i += 1) {
//             if (i == (valor - 1) / 2) {
//                 linha = linha + asterisco;
//             } else {
//                 linha = linha + espaco;
//             }
//         }
//         console.log(linha);
//         linha = "";
//     } else {
//         for (k = 0; k < valor; k += 1) {
//             linha = linha + asterisco;
//         }
//         console.log(linha);
//     }
// }

// Piramide Vazia

for (j = 0; j < altura; j += 1) {
    if (j !== meio) {
        for (i = 0; i < valor; i += 1) {
            if (i == ((valor - 1) / 2) + j || i == ((valor - 1) / 2) - j ) {
                linha = linha + asterisco;
            } else {
                linha = linha + espaco;
            }
        }
        console.log(linha);
        linha = "";
    } else {
        for (k = 0; k < valor; k += 1) {
            linha = linha + asterisco;
        }
        console.log(linha);
    }
}