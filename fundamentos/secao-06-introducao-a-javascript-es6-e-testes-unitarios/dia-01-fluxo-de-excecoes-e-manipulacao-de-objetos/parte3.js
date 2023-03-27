const studentRegister = (name, age) => {
    // seu código aqui
    try {
        checkInfos(name, age);
        checkAge(age);
        return `${name}, seja bem-vindo(a) à AuTrybe!`
    }
    catch (error) {
        return error.message; 
    }
  }

const checkInfos = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  } 
};

const checkAge = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
}

console.log(studentRegister('Lucas', '29'));