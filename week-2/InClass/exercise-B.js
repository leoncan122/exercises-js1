function boolChecker(bool) {
  if (typeof bool === 'boolean') {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

console.log(boolChecker(true));
console.log(boolChecker(2));

console.log("------------");//homework repaso
let boolcheck = (boolean) => {
  if (typeof boolean === 'boolean') {
    return "You've given me a bool, thanks!";
  } else {
    return "No bool, not cool."
  }
}
console.log(boolcheck(true));
console.log(boolcheck(false));
console.log(boolcheck(32));