let eye = document.getElementById("eye");
let input = document.getElementById("password");
let check = false;
eye.onclick = function(){
    if(check == false){
        input.setAttribute("type","password");
        check = true;
    }else{
        input.setAttribute("type","text");
        check = false
    }
}