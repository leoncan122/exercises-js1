function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}
console.log(numberChecker(17));

console.log("------------");//homework repaso
let vowelChecker = (word) => {
  if (word >= 'a' && word <= 'z') {
    return word + ", you right is a vowel"
  } else {
    return word + " it's not a vowel, sorry :("
  }
}

console.log(vowelChecker("i"));
console.log(vowelChecker("A"));
