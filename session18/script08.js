let a = +prompt("cm");
let b = +prompt("cm");
let c = +prompt("cm");
if (a==b&&a==c&&b==c) {
    alert("Tam giác đều");
}
else if (a == b || b == c || a == c) {
    alert("Tam giác cân");
}
else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
    alert("Tam giác vuông");

}
else {
    alert("Tam giác thường");
}

