let fruits = [3, 4, 10, 1, 12];
let sumFruits = 0;

// for (let index = 0; index < fruits.length; index += 1) {
//     sumFruits += fruits[index];
// }

for (let fruit of fruits) {  
    sumFruits += fruit;
}


if (sumFruits > 15) {
    console.log(sumFruits);
} else {
    console.log("Valor menor que 16");
}