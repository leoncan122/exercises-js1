const name = " Daniel  ";

let message = "  Tu eres " + name;

console.log(message);
console.log(message.replace('e', 'a'));
console.log("La afirmacion es " + message.startsWith('T'));
console.log(message.valueOf('e'));


//homework repaso

let name2 = " Marina  ";
let cleaname = name2.trim();
let message2 = " Tu eres " + cleaname;


console.log("-----------------")
console.log(cleaname);
console.log(message2.trim());
console.log(message2.replace('i', 'e').trim());
