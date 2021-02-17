NumberOfStudents = 300;
NumberOfMentors = 100;

TotalNumberClass = NumberOfStudents + NumberOfMentors;

Percentage_students = Math.round(NumberOfStudents * 100 / TotalNumberClass);

console.log("Porcentaje de estudiantes: " + Percentage_students + "%");

Percentage_Mentors = Math.round(NumberOfMentors * 100 / TotalNumberClass);

console.log("Porcentaje de mentors: " + Percentage_Mentors + "%");

