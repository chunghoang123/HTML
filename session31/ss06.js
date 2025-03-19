let user ="huanrose@gmail.com";
let pass = "123456";
let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(form);
    let email = data.get("email");
    let password = data.get("password");
    if (email === user && password === pass) {
        console.log("Dang nhap thanh cong");
    } else {
        console.log("Dang nhap that bai");
    }
})

