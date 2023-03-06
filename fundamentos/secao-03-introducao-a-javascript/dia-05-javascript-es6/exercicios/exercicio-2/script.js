// funcao 1

function substituaX(nome) {
    const frase = `Tryber x aqui!`;
    let split = frase.split(' ');
    let message = "";

    for (index = 0; index < split.length; index += 1) {
        if (split[index] === 'x') {
            split[index] = nome;
        }
        message += `${split[index]} `;
    }

    return message;
}

console.log(substituaX('Lucas'));

// funcao 2

function minhasSkills(funcao) {
    const skills = ['html', 'css', 'javascript']; 
    let message = `${funcao}
    Minhas três principais habilidades são:`

    for (index = 0; index < skills.length; index += 1) {
        message += `
    • ${skills[index]}`
    }

    console.log(message);

}

minhasSkills(substituaX('Lucas')); 