/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/
/*
function validatePasswords(passwords) {

  let upper_ASCII = [65, 90];
  let lower_ASCII = [97, 122];
  let num_ASCII = [48, 57];
  let symbol_ASCII = [33, 35, 36, 37, 46, 42, 38];

  let separados = (elem) => elem.split("");

  let z = passwords.map(separados);

  let h = z.map(o => o.some(v => upper_ASCII.includes(v)) &&
    o.some(v => lower_ASCII.includes(v)) &&
    o.some(v => num_ASCII.includes(v)) &&
    o.some(v => symbol_ASCII.includes(v)))


  return h;

}*/

function validatePasswords(passwords) {
  let p1 = passwords.map(e => e.split(""));

  let p2 = p1.map(x => {
    let y = x.map(w => w.charCodeAt())
    return y;
  });

  let upper_ASCII = [65, 90];
  let lower_ASCII = [97, 122];
  let num_ASCII = [48, 57];
  let symbol_ASCII = [33, 35, 36, 37, 46, 42, 38];

  let ui = (p_dos) => {
    let result = p_dos.map(o => {
      let p_1 = o.length >= 5;
      let p_2 = o.some(qq => qq >= upper_ASCII[0] && qq <= upper_ASCII[1]);
      let p_3 = o.some(qq => qq >= lower_ASCII[0] && qq <= lower_ASCII[1]);
      let p_4 = o.some(qq => qq >= num_ASCII[0] && qq <= num_ASCII[1]);
      let p_5 = o.some(qq => qq >= symbol_ASCII[0] && qq <= symbol_ASCII[6]);

      return p_1, p_2, p_3, p_4, p_5;
    })
    return result;
  }

  return ui(p2);
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
);

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);
