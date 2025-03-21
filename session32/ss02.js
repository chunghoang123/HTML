let count = 0;
document.getElementById("btn-changer").onclick = function(){
    count++;
    document.getElementById("count").textContent =`Số lần bấm ${count}` ;
}