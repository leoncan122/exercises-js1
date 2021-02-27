//function checker(username) {

//  if (username[0] === "a" || username === "e" || username === "i" || username === "o" || username === "u" && (username.lentgh >= 5 && username.lentgh <= 10)) {
//      console.log(username + ": Username Valid");
//  } else {
//      console.log(username + ": Is not Valid");
// }

//}

//checker("andressss");
//checker("martin");

// ejercicio F -2

function checker(username, type) {

    if (username[0] === username[0].toUpperCase() && (username.length >= 5 && username.length <= 10)) {
        console.log(username + ": Username Valid");
    } else {
        console.log(username + ": Is not Valid");
    }

}

checker("Andress");
checker("martin");