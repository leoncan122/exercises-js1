/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;

function sumTillNum(num) {
	let suma = 0;
	for (let i = 0; i <= 10; i++) {

		suma = suma + i;
	}
	return suma;
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));

console.log("-------------"); //homework repaso

let forsum = (num) => {
	let counter = num;
	let result = 0;
	for (let i = 0; i <= counter; i++) {
		result = result + i;

	}
	return "suma desde 0 hasta " + counter + " is: " + result;
}
console.log(forsum(11));