let español = ["Juan", "Emilio", "Emilio", "Antonio", "Fode", "Gio", "Ronar", "Adrian", "Ato", "Diego", "Jaime"];
let ingles = ["Kimberly", "Keti", "Manpreet", "Artur"];

let todos = español.concat(ingles);

console.log(todos.sort());


function clase(name, clase) {
    if (clase.includes(name)) {
        return name + " está en la clase con " + clase;
    } else {
        return name + " no está en la clase con " + clase;

    }
}
console.log(clase("Emilio", español));
console.log(clase("pedro", todos));

console.log("----------------"); //homework repaso

let clase1 = ["marcos", "juan", "isabel", "lorena", "pepe", "wilmer"];
let clase2 = ["giovanni", "emily", "ricardo", "andrea", "roberto"];

console.log(clase1.concat(clase2));

let donde = (nombre, classe) => {

    let classeclean = classe.split(nombre);

    if (classe.includes(nombre)) {
        return nombre + " esta en la clase con " + classeclean;
    } else {
        return nombre + " no esta en la clase con " + classeclean;
    }
}
console.log(donde("marcos", clase1));