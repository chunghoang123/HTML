let menu = `
----menu----
1. Cộng hai số
2. Trừ hai số
3. Nhân hai số
4. Chia hai số
5. Thoát
mời nhập lựa chọn
`
let choice
while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let a = +prompt("nhập số a");
            let b = +prompt("nhập số b");
            if (isNaN(a) || isNaN(b)) {
                alert("không phải số")
            } else {
                sum(a, b);
                alert(sum(a, b));
            }
            break;
        case 2: {
            let a = +prompt("nhập số a");
            let b = +prompt("nhập số b");
            if (isNaN(a) || isNaN(b)) {
                alert("không phải số")
            } else {
                minus(a, b);
                alert(minus(a, b));
            }
            break;
        }

        case 3: {
            let a = +prompt("nhập số a");
            let b = +prompt("nhập số b");
            if (isNaN(a) || isNaN(b)) {
                alert("không phải số")
            } else {
                multiply(a, b);
                alert(multiply(a, b));
            }
            break;

        }

        case 4: {
            let a = +prompt("nhập số a");
            let b = +prompt("nhập số b");
            if (isNaN(a) || isNaN(b)) {
                alert("không phải số")
            } else {
                divide(a, b);
                alert(divide(a, b));
            }
            break;
        }

        case 5:
            alert("Thoát")
            break;
        default:
            alert("lựa chọn không tồn tại")
            break;

    }
}
function sum(a, b) {
    return a + b
}
function minus(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    if (b == 0) {
        return "lỗi chia cho 0"
    }
    return a / b
}
