function checker2(pass) {
    let p1 = pass.split("");
    let p2 = p1.map(x => x.charCodeAt());

    let upper_ASCII = [65, 90];
    let lower_ASCII = [97, 122];
    let num_ASCII = [48, 57];
    let symbol_ASCII = [33, 35, 36, 37, 46, 42, 38];

    let p3 = p2.some(o => symbol_ASCII.includes(o));
    let p4 = p2.some(o => num_ASCII.includes(o));
    let p5 = p2.some(o => lower_ASCII.includes(o));
    let p6 = p2.some(o => upper_ASCII.includes(o));
    let p7 = p1.length >= 5;

    return [p3, p4, p5, p6, p7];
}



console.log(checker2("AlndfjWQ23!"))