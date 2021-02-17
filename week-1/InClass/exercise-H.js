function SaludoFcn(greetingStart, name) {

    let greeting = `${greetingStart} ${name}`;

    console.log(greeting);
}
let greetingStart = ["Buenos dias", "como estas?"];

SaludoFcn(greetingStart[0], "Leon");
SaludoFcn("Mario,", greetingStart[1]);



// los parametros son las variables que cambian en la funcion