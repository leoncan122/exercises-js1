//Escribe otra función que reciba el año de nacimiento birthYear y retorne el string Los
//nacidos en el año { birthYear } pueden manejar o Los nacidos en el año { birthYear } pueden manejar en { x }
//años
//● Usa el arreglo de los años de nacimiento, [1964, 2008, 1999, 2005, 1978, 1985, 1919], para
//obtener un arreglo de strings que indiquen si estas personas pueden manejar
//● Imprime el arreglo resultante

function driver(birthYear) {
    let x = birthYear - 2003;
    if (birthYear <= 2003) {
        console.log("Los nacidos en el año " + birthYear + " pueden manejar.");
    } else {
        console.log("Los nacidos en el año " + birthYear + " no pueden manejar.Pueden manejar en " + x + " años");
    }
}

console.log(driver(2010));//test

let bornlist = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

bornlist.forEach(driver);

console.log("---------------") //homework repaso

let manejar = (nacimiento) => {
    let legal = 2003;
    let x = nacimiento - legal;

    if (nacimiento <= legal) {
        return "Los nacidos en el año " + nacimiento + " pueden manejar";
    } else {
        return "Los nacidos en el año " + nacimiento + " no pueden manejar, podran hacerlo en " + x + " años";
    }
}

let lista = bornlist.map(manejar);
console.log(lista);
