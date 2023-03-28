const hydrate = (string) => {
    const onlyTheNumbers = string.match(/\d+/g);
    let sum = 0;
    for (let index = 0; index < onlyTheNumbers.length; index += 1) {
        sum += parseInt(onlyTheNumbers[index]);
    }
    return `${sum} copo${sum > 1 ? 's' : ''} de água`
}

module.exports = hydrate;