let num1 = +prompt("Mời nhập số để kiểm tra có phải số nguyên tố ko ");
if (isNaN(num1)) {
    alert("sai cú pháp")
} else {
    let check = true;
    for (let i = 2; i < num1; i++) {
        if (num1 % i == 0) {
            check = false;
            break;
        }
    }
    if (check == true) {
        alert("số nguyên tố");
    } else {
        alert("không phải số nguyên tố");
    }
}
