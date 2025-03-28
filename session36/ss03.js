let buttons = document.getElementsByClassName("color-btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let selectedColor = this.style.backgroundColor;
        document.body.style.backgroundColor = selectedColor;
        localStorage.setItem("savedColor", selectedColor);
    };
}

let savedColor = localStorage.getItem("savedColor");
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}