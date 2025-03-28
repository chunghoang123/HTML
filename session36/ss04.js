
let modeToggle = document.querySelector(".dark-mode-toggle");
let modeIcon = document.getElementById("mode-icon");
let darkMode = localStorage.getItem("darkMode");


if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
    modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
}

modeToggle.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
    } else {
        localStorage.setItem("darkMode", "disabled");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png";
    }
};
