let result = document.getElementById('result')
let btn = document.getElementById('btn')
btn.onclick = function(){
    let input = document.getElementById('email').value
    if(input.includes('@') && input.endsWith(".com") || input.includes('@') && input.endsWith(".vn")  ){
     result.textContent = 'email hợp lệ'
     result.style.color = 'green'
    }else{
     result.textContent = 'email ko hợp lệ'
     result.style.color = 'red'
    } 
 }