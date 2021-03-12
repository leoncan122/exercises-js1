// calculadora funcion por funcion
function suma(num1, num2) {
    let suma = num1 + num2;
    return "Hola, el resultado de tu suma es: " + suma;
}

function resta(num1, num2) {
    let resta = num1 - num2;
    return "Hola, el resultado de tu resta es: " + resta
}

function division(num1, num2) {
    let division = num1 / num2;
    return "Hola, el resultado de tu division es: " + division;
}

function multiplicacion(num1, num2) {
    let multiplicacion = num1 * num2;
    return "Hola, el resultado de tu multiplicacion es: " + multiplicacion;
}
// invocacion de la funcion, con definicion de parametros

let resultado_suma = suma(21, 43);
console.log(resultado_suma);

let resultado_resta = resta(32, 33);
console.log(resultado_resta);

let resultado_multiplicacion = multiplicacion(1, 53);
console.log(resultado_multiplicacion);

let resultado_division = division(443, 43);
console.log(resultado_division);


// funcion que invoca funcion

function cantidad_habit(mujeres, hombres, niños) {
    const suma = mujeres + hombres + niños;
    return suma;
}

function ingreso_habit(multiplicador, mujeres, hombres, niños) {

    let multiplicacion_habit = cantidad_habit(mujeres, hombres, niños) * multiplicador;

    return multiplicacion_habit;
}

console.log(ingreso_habit(3, 10, 10, 1));


// homerwork repaso

function division(num1, num2) {
    return num1 / num2;
}

let x = division(10, 2);

function display(result) {
    let messg = "el resultado es " + result + "."
    return messg;
}

console.log(display(x));


