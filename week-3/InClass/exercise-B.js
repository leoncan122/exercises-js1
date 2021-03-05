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