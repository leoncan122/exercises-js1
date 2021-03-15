//Crea una función que:
//● Reciba como parámetro un arreglo con años de nacimiento birthYears
//● Imprima el mensaje Estos son los años de nacimiento de las personas que pueden manejar: <años de
//  nacimiento filtrados>
//    ● Retorne un arreglo con los años de nacimientos de las personas que pueden conducir

let bornlist = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

let result = bornlist.filter(function (birthYears) { return birthYears <= 2003 });
console.log(result);

console.log("----------"); //homework repaso

let func = (arr) => arr.filter(x => "estos son los años de nacimiento de las persona que puede manejar: " + x <= 2003);

console.log(func(bornlist));