
let cp = "CB10AB"
const textRegex = cp.replace(' ','');
const regex = /^([Cc][Bb]1[0-1][A-Za-z]{2})$/;
console.log(regex);
if (regex.exec(cp) != null) {
    console.log(cp);
    console.log("true");
} else {
    console.log("false");
}


  