const allLessons = {
    lesson1: {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã'
    },
    lesson2: {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos'
    },
    lesson3: {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite'
    }
}

function studentCounter(subject) {
    let keys = Object.keys(allLessons);
    let sumStudents = 0;

    for (index = 0; index < keys.length - 1; index += 1) {

        let lesson = keys[index];

        if (allLessons[lesson].materia === subject) {
            sumStudents += allLessons[lesson]['numeroEstudantes'];
        }
    }
    return `${sumStudents} estudantes que assistiram às aulas de Matemática`
}

console.log(studentCounter('Matemática'));

function createReport(object, teacher) {
    let keys = Object.keys(allLessons);
    let sumStudents = 0;
    let objectReport = {};
    objectReport['professor'] = teacher;
    objectReport['aulas'] = [];

    for (index = 0; index < keys.length; index += 1) {

        let lesson = keys[index];

        if (object[lesson].professor === teacher) {

            objectReport['aulas'].push(object[lesson]['materia']);
            sumStudents += object[lesson]['numeroEstudantes'];
            objectReport['estudantes'] = sumStudents;

        }

    }
    return objectReport;
}

console.log(createReport(allLessons,'Maria Clara'));