let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(form);
    let email = data.get("username");
    let password = data.get("password");
    if (email ==="huanrose@gmail.com"  && password === "123456") {
        console.log("Dang nhap thanh cong");
    } else {
        console.log("Dang nhap that bai");
    }
})

