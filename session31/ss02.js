document.getElementById("btn-id").onclick = function () {
    let background = document.getElementById("background");
    let elements = document.getElementsByClassName("black");
    if (background.style.backgroundColor === "white") {
        background.style.backgroundColor = "black"
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "white";

        }
    } else {
        background.style.backgroundColor = "white"
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "black";
        }

    }
}