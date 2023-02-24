let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = "";
let smallestWord = "";

// console.log(array[1].length);

for (index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    } 
}

console.log("A maior palavra é: " + biggestWord);

for (index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length || smallestWord == "") {
        smallestWord = array[index];
    }
}

console.log("A menor palavra é: " + smallestWord);
