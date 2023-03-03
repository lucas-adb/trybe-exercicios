let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// #1

  function addProperty(object, key, value) {
   return object[key] = value;
  }

  addProperty(lesson2, 'turno', 'noite');
  console.log(lesson2);
 

// #2

  function objectKeys(object) {
    console.log(Object.keys(object));
  }

  objectKeys(lesson2);
  
// #3

  function objectLength(object) {
    console.log(Object.keys(object).length);
  }

objectLength(lesson2)

// #4 

  function objectValues(object) {
    console.log(Object.values(object));
  }

objectValues(lesson2)

// #5 

    let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);