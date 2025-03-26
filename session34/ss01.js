let email = document.getElementById("Email");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm")
if (email != "@" && email != "" && email != ".com") {
    alert("Email ko hop lệ");
} else {
    if (password.length < 8) {
        alert("Password ko hop lệ");
    } else {
        if (password.value != confirm.value) {
            alert("Password ko hop lệ");
        }else{
            alert("Đăng ký thành công");
        }
    }
    
}