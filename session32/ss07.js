let pic1 = document.getElementById('pic1');
let current;
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let outside = document.getElementById('body');
outside.onclick = function(event){
    if(event.target === outside && outside.classList.contains('test')){
       if(current===1){
        pic1.classList.remove('heightChange')
       }else if(current===2){
        pic2.classList.remove('heightChange')
       }else{
        pic3.classList.remove('heightChange')
       }
        pic1.style.display = 'block'
        pic2.style.display = 'block'
        pic3.style.display = 'block'
        outside.classList.remove('test')
        
    }
}

pic1.onclick = function(){
    current= 1
    pic1.classList.add('heightChange')
    pic2.style.display = 'none'
    pic3.style.display = 'none'
    outside.classList.add('test')
}
pic2.onclick = function(){
    current=2
    pic2.classList.add('heightChange')
    pic1.style.display = 'none'
    pic3.style.display = 'none'
    outside.classList.add('test')
}
pic3.onclick = function(){
    current=3
    pic3.classList.add('heightChange')
    pic2.style.display = 'none'
    pic1.style.display = 'none'
    outside.classList.add('test')
}