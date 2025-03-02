let maths = +prompt("môn toán")
let literature = +prompt("môn văn");
let english = +prompt("môn anh");
let total = maths + literature + english;
let medium = total / 3;


if (medium >= 8) {
    alert(`${medium} "Giỏi"`);
} else if (medium >= 6.5) {
    alert(`${medium} "Khá"`);
} else if (medium >= 5) {
    alert(`${medium} "TB"`);
} else {
    alert(`${medium} "Yếu"`);
}

