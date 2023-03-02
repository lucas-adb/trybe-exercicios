let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
};

let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
};

function showSkills(student) {
    let keys = Object.keys(student);
    for (index = 0; index < keys.length; index += 1) {
        console.log(keys[index] + ", Nível: " + student[keys[index]]);
    }
};

showSkills(student1);
