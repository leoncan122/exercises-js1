function solution(str) {
    let array = str.split("");
    array.splice(0, 1);
    array.pop();
    console.log(array);
    array = array.join("");
    return array;
}

let result = solution("hola");

console.log(result)