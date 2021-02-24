function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}
for (let result = 6; result <= 20; result += 1) {
  if (isEven(result)) {
    console.log("the exponential of " + result + " is: " + exponential(result));
  }
}
