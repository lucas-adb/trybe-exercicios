function arrayOfNumbers(vector) {
let array = []; 
  for (index = 0; index < vector.length; index += 1) {
    for (index2 = 0; index2 < vector[index].length; index2 += 1) {
      if (vector[index][index2] % 2 == 0) {
        array.push(vector[index][index2])
      }
    }
  }
return array;
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));