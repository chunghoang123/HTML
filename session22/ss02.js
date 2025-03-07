let arr = [1, 3, 5, 7, 9];
let number = +prompt("mời đoán số nguyên")
let check=true
if (isNaN(number)) {
    alert("không phải số nguyên")
} else {
    for (i = 0; i < arr.length; i++) {
        if (number===arr[i]) {
            check=false
        } 
    }
}
if(check==false){
    alert("Bingo");
}else{
    alert("Chúc may mắn lần sau");
}