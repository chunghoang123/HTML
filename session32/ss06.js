let size = 20
let max = document.getElementById('max');
let min = document.getElementById('min');
let content = document.getElementById('text');

max.onclick = function(){
    size++
    content.style.fontSize = size+"px"
}
min.onclick = function(){
    size--
    content.style.fontSize = size+"px"
}