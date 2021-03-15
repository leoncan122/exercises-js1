//Crear una función que tome como parámetro un año de nacimiento birthYear, y retorne la
//edad en años
//● Dado un arreglo con los años de nacimiento de 7 personas[1964, 2008, 1999, 2005, 1978,
//    1985, 1919], crea otro arreglo que contenga las edades de esas personas.
//● Imprimir el arreglo resultando

function age(birthYear) {
    console.log(2021 - birthYear);
}

let bornlist = [1964, 2008, 1999, 2005, 1978,
    1985, 1919];

let ages = bornlist.map(age);


// bornlist.forEach(age);

console.log("-----------"); //homework repaso

let edad = (añonaci) => 2021 - añonaci;

let edades = bornlist.map(edad);

console.log(edades);




