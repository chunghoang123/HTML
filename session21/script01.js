let sum = 0;
for (let i = 0; i < 5; i++) {
    let num1 = +prompt("mời nhập 5 số nguyên");
    if (isNaN(num1)) {
        alert("số nhập vào không phải là số");
    } else {
        if (num1 % 2 !== 0) {
            sum += num1;
        }
    }
}
alert("tổng các số lẻ: " + sum)

