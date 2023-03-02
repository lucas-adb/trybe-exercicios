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