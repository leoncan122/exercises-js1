let greetingStart = ["Buenos dias", "como estas?"];
let name = "Leon"

function SaludoFcn(greetingStart, name) {

    let greeting = `${greetingStart} ${name}`;

    console.log(greeting);
}

// invocacion de la funcion, con definicion de parametros
SaludoFcn(greetingStart[0], name);
SaludoFcn(name, greetingStart[1]);



// los parametros son las variables que cambian en la funcion