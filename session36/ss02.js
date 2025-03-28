let likeBb = document.getElementById("like-bunbo");
let likeP = document.getElementById("like-pho");
let likeCt = document.getElementById("like-comtam");

function loadLikes() {
    likeBb.textContent = localStorage.getItem("like-bunbo") || 0;
    likeP.textContent = localStorage.getItem("like-pho") || 0;
    likeCt.textContent = localStorage.getItem("like-comtam") || 0;
}
function likeFood(food) {
    let count = localStorage.getItem("like-" + food) || 0;
    count++;
    localStorage.setItem("like-" + food, count);
    document.getElementById("like-" + food).textContent = count;
}

loadLikes();