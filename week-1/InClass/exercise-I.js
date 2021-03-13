function getAgeinDays(age) {
    return age * 365;
}
getAgeinDays(25);

function presentation(name, age) {
    let timeonearth = getAgeinDays(age);
    let message = "Hola " + name + " tu tiempo estimado en la tiera es " + timeonearth + " días";

    return message
}


message = presentation("leon", 25)
console.log(message)


console.log("--------------------");//homework repaso

let ageindays = (age) => age * 365;
let res1 = ageindays(30);

let presentacion = (name, age) => {
    let tiempoentierra = ageindays(age);
    let message = "Hola " + name + " tu tiempo estimado en la tierra es " + tiempoentierra + " dias."
    return message;
}

console.log(presentacion("jimena", 20));