// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

//#1
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const multiplies = numbers.map((num) => num * 100);
console.log(multiplies);

//#2
function multi(n) {
    return n * 100
}
const multiplies2 = numbers.map(multi);
console.log(multiplies2);

//#3
const multiplies3 = numbers.some((num) => typeof (num) === "number")
console.log(multiplies3);
if (multiplies3) {
    let result = numbers.map(function (x) {
        return x * 100;
    });
    console.log(result)
}
