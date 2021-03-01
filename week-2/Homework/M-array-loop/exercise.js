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
  if (arr.indexOf("T") > -1) {
    return console.log(arr)
  }
}
console.log("the days of the week that began whit T are: " + daysWhitT(daysOfWeek))