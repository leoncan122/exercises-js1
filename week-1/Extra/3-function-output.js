// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  return Math.random() * 10;
}// this function will return a random number and multiplies by 10

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2);
}// this function will return a new String, that will be composed by 2 strings.

function concatenate(firstWord, secondWord, thirdWord) {
  /*return ` ${firstWord} ${secondWord} ${thirdWord} `;*/
  return firstWord + " " + secondWord + " " + thirdWord;
}// this function will return a string, composed by three words.

console.log(concatenate("code", "your", "future"));
console.log(concatenate("I", "like", "pizza"));
console.log(concatenate("I", "am", 13));

/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node 3-function-output` into your terminal
*/

const util = require('util');

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate('code', 'your', 'future'),
  "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate('I', 'like', 'pizza'),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate('I', 'am', 13),
  "I am 13"
);
