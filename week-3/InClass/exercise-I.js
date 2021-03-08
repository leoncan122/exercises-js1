
let arr = [100, "iSMael", 55, 45, "sANyiA", 66,
    "1JaMEs", "eLAmIn", 23, "IsMael", 67, 19,
    "ElaMIN"]


function cleaner(array) {
    let result = array.filter((word) => typeof word === "string");

    let plus = "!"

    let clean = result.map((names) => names.toUpperCase().concat(plus));

    return clean;
}

console.log(cleaner(arr));