function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0; //devolvera un boolean
}
for (let result = 6; result <= 20; result += 1) {
  if (isEven(result)) {
    console.log("the exponential of " + result + " is: " + exponential(result));
  }
}

console.log("-----------"); //homework repaso

for (let index = 6; index <= 25; index += 2) {

  if (isEven(index)) { //el if comprueba si es true or false
    console.log("The exponential of " + index + " is: " + exponential(index));
  }
}
console.log("::::::::")

let limit = 1

while (limit <= 20) {
  let resultado = exponential(limit);

  console.log("The exponential of " + limit + " is: " + resultado);

  limit++;
}