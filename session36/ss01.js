let nameInput = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");
let greeting = document.getElementById("greeting");
let userNameDisplay = document.getElementById("userName");
let formContainer = document.getElementById("formContainer");
let changeNameBtn = document.getElementById("changeNameBtn");
let savedName = localStorage.getItem("userName");


let saveName = localStorage.getItem("userName");
let resetFlag = localStorage.getItem("resetFlag");


if (savedName && !resetFlag) {
    userNameDisplay.textContent = savedName;
    greeting.style.display = "block";
    formContainer.style.display = "none";
} else {
    localStorage.removeItem("resetFlag");
}

saveBtn.onclick = function () {
    let name = nameInput.value.trim();
    if (name) {
        localStorage.setItem("userName", name);
        localStorage.removeItem("resetFlag");
        userNameDisplay.textContent = name;
        greeting.style.display = "block";
        formContainer.style.display = "none";
    }
};

changeNameBtn.onclick = function () {
    localStorage.setItem("userName", name);
    localStorage.removeItem("resetFlag");
    greeting.style.display = "none";
    formContainer.style.display = "block";
    nameInput.value = "";
}; 