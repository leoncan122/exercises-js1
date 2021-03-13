/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 10;

function sumTillNum(num) {
	let suma = 0;
	let counter = 0;
	while (counter < 10) {
		suma = suma + counter;
		counter += 1;
	}
	return suma;
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));

console.log("-------------------")//homework repaso

let x = 0;
let resultado = 0

while (x <= 15) {
	resultado = resultado + x
	x++
}
console.log("Suma desde 0 hasta " + x + " is: " + resultado);