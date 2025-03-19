let modal = document.getElementById('modal');
let btn = document.getElementById("open")
let body = document.getElementById("body")
 btn.style.borderColor = "black"
modal.style.display = 'none';
let check = true
btn.onclick = function(){
    if(check){
       modal.style.display = 'block';
    body.classList.toggle("backgroundColorChange")
    btn.classList.toggle("backgroundColorChange")
    btn.style.borderColor = "rgb(203, 202, 202" 
    check = false
    }
}
let mark = document.getElementById("mark")
mark.onclick = function(){
    modal.style.display = 'none';
    body.classList.toggle("backgroundColorChange")
    btn.classList.toggle("backgroundColorChange")
    btn.style.borderColor = "black"
    check = true
}