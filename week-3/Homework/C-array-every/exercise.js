/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = group.every((person) => students.includes(person)); // complete this statement
console.log(groupIsOnlyStudents);// falso por que no cumple la condicion.

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

console.log("-------------"); //homework repaso

let soloestudiantes = group.every(est => students.includes(est));
console.log(soloestudiantes);

console.log("--------------");

for (let index = 0; index < group.length; index++) {
  const element = group[index];

  if (students.includes(element)) {
    console.log(element);
  }
}

/* EXPECTED RESULT */

// The group does not contain only students
