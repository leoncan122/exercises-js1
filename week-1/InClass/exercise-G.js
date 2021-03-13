NumberOfStudents = 300;
NumberOfMentors = 100;

TotalNumberClass = NumberOfStudents + NumberOfMentors;

Percentage_students = Math.round(NumberOfStudents * 100 / TotalNumberClass);

console.log("Porcentaje de estudiantes: " + Percentage_students + "%");

Percentage_Mentors = Math.round(NumberOfMentors * 100 / TotalNumberClass);

console.log("Porcentaje de mentors: " + Percentage_Mentors + "%");

console.log("-----------------");//homework repaso
let nstudents = 400;
let nmentors = 100;

let totalclase = nstudents + nmentors;

let porcStudents = Math.round(nstudents * 100 / totalclase);
console.log("Porcentaje de estudiantes en la clase: " + porcStudents + "%");

let porcMentors = Math.round(nmentors * 100 / totalclase);
console.log("Porcentaje de mentores en la clase: " + porcMentors + "%");