function mood(estado) {
    if (estado == "happy") {
        return "Good job, you're doing great!";
    } else if (estado == "sad") {
        return "Every cloud has a silver lining";
    } else if (typeof estado == 'number') {
        return "Beep beep boop";
    } else {
        return "I'm sorry, I'm still learning about feelings!";
    }
}

console.log(mood("happy"));
console.log(mood("sad"));
console.log(mood(412));
console.log(mood("true"))

console.log("------------");//homework repaso
function saluto(ora) {
    if (ora <= 12) {
        return "Buongiorno";
    } else if (ora > 12 && ora <= 21) {
        return "Buonasera";
    } else {
        return "Buonanotte"
    }
}
console.log(saluto(10));
console.log(saluto(15));
console.log(saluto(00));
console.log(saluto(22));