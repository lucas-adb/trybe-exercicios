let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda", info['personagem']);
console.log("Bem-vinda", info.personagem);

console.log("-----");

info['recorrente'] = 'Sim';
console.log(info);

console.log("-----");

for (let keys in info) {
    console.log(keys);
}

console.log("-----");


for (let values in info) {
    console.log(info[values]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente:  'Sim'
};

console.log("-----");

let valores1 = Object.values(info);
let valores2 = Object.values(info2);

console.log(valores1);
console.log(valores2);

console.log("-----");

for (index = 0; index < valores1.length; index += 1) {
    for (index2 = 0; index2 < valores2.length; index2 += 1) {
        if (index === index2) {
            console.log(valores1[index] + " e " + valores2[index2]);
        } 
    }
}