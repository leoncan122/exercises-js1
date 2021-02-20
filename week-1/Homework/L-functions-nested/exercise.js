

function cant_students(mentors) {
    let students = (65 * mentors) / 35;
    return students;
}
let num_students = cant_students(5);
let num_mentors = 5;

console.log(Math.round(num_students));

function per_class(students, mentors) {
    per_total = 100
    total_students = 19
    per_students = (students * per_total) / total_students;
    per_mentors = (mentors * per_total) / total_students;
    return "percent of students: " + Math.round(per_students) + "     percent of mentors: " + Math.round(per_mentors);
}

console.log(per_class(14, 5));


