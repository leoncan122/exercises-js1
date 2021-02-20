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