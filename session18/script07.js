let a = +prompt("số a")
let b = +prompt("số b")
let operation = prompt("Mời nhập phép tính(+;-;*;/)")
if (operation == "+") {
    alert(a + b)
} else if (operation == "-") {
    alert(a - b)
} else if (operation == "*") {
    alert(a * b)
} else if (operation == "/") {
    if (b != 0) {
        alert(a / b)
    } else {
        alert("lỗi chia cho 0")
    }
}else{
    alert("sai cú pháp");
}
