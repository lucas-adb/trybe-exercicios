// let countries = {
//     franca: 'Paris',
//     brasil: 'Brasília',
//     espanha: 'Madrid',
//     portugal: 'Lisboa',
//   };
//   let pairKeyValue = Object.entries(countries);
//   console.log(pairKeyValue);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

let person = {
    name:'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
  };
  
  let newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);


person.name = 'Zé';
console.log(person);