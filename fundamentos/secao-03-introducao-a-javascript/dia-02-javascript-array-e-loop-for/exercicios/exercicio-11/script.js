let word = 'tryber';
let wordBackwards = [];
let wordBackwardsSum = ""; 

for (let index = 0; index < word.length; index += 1) {
    wordBackwards.unshift(word[index]);
}

// console.log(wordBackwards);

for (let index2 = 0; index2 < wordBackwards.length; index2 += 1) {
    wordBackwardsSum += wordBackwards[index2];
}

console.log(wordBackwardsSum);