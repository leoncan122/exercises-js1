//Crea una función tal que:
//● Reciba un arreglo de nombres y nombre como parámetro
//● Revise si el nombre está en el arreglo
//● Si está en el arreglo, que retorne Found me!; sino, retorne Haven't found me :(

let nombres = ["leon", "antonio", "angelo", "maria"];

function check(lista, nombre) {
    if (lista.includes(nombre)) {
        console.log("Found me!");
    } else {
        console.log("Haven't found me :(");
    }
}

//homework repaso

function check2(nombre, arr) {

    let result = arr.find(name => name === nombre);

    if (result) {
        console.log("Found me!");
    } else {
        console.log("Haven't found me :(");
    }
}

check(nombres, "antonio");

check2("lisandro", nombres);