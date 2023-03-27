const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!';
  }

  const sortArray = array.sort();
  const arrayOfObjects = []; 

  for (let index = 0; index < array.length; index += 1) {
    arrayOfObjects.push(
        {
            tech: sortArray[index],
            name: name, 
        }
    )
  }
  return arrayOfObjects;
}

module.exports = techList;