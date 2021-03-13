/*
  Write a function that receives an array of string, and console.log all strings that start with letter 'T'
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function daysWhitT(arr) {

  let result = [];

  for (let i = 0; i < 6; i++) {

    if (arr[i].startsWith("T", 0)) {

      result.push(arr[i]);
    }
  }
  return result;
}
console.log("the days of the week that began whit T are: " + daysWhitT(daysOfWeek))

console.log("--------------"); //homework repaso

let giorni = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"];


function daysWith(arr, letra) {
  let answer = [];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (arr[index].startsWith(letra, 0)) {
      answer.push(arr[index]);
    }
  }
  return "I giorni che cominciano con la lettera " + letra + " sono: " + answer;
}
console.log(daysWith(giorni, "M"));