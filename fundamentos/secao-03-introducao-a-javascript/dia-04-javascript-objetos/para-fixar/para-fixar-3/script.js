// let customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
//   customer1.lastName = 'Faria';
//   console.log(customer1);
  
//   let customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

//

// let customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   let lastName = 'Ferreira';
  
//   function addProperty(object, key, value) {
//     object[key] = value;
//   };
  
//   addProperty(customer, 'lastName', 'Ferreira');
//   console.log(customer);

  //

  student = {};

  function addProperty(object, key, value) {
    object[key] = value;
  };

  addProperty(student, 'name', 'Lucas');
  addProperty(student, 'lastName', 'Alves');
  addProperty(student, 'email', 'alvesdebrito.lucas@gmail.com');

  console.log(student);