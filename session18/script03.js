let acc = prompt("Mời nhập tên đăng nhập(all in Hoa)");
if (acc === "ADMIN") {
    let pass = prompt("Mời nhập mật khẩu(in hoa 2 chữ cái đầu)");
    if (pass === "TheMaster") {
        alert("Welcome");
    } else if (pass === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password")
    }
} else if (acc === null) {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}