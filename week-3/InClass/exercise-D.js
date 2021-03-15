//homerowrk repaso

function abracaFunction(yourFunc) {
    console.log(
        "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
        "James",
        "Elamin",
        "Ismael",
        "Sanyia",
        "Chris",
        "Antigoni",
    ];
    const abracaOutput = yourFunc(abracaArray);
    return abracaOutput;
}
let mayus = (array) => array.sort()

console.log(abracaFunction(mayus));