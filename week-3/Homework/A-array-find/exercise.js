/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

function findLongNameThatStartsWithA(arr) {
  if (arr.startsWith("A") && arr.length > 7) {
    return arr;
  }

}


var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA)
console.log(longNameThatStartsWithA);

console.log("----------"); //homework repaso

let morethan8letters = names.find(name => name.startsWith("A") && name.length > 8);
console.log(morethan8letters);

let reasult = names.find((nombre) => nombre.startsWith("A") && nombre.length - 7);
console.log(reasult);

/* EXPECTED OUTPUT */
// "Alexandra"
