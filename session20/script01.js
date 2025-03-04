let num1 = +prompt("mời nhập 1 số ngẫu nhiên");
let sum =0;
if( num1>=0){
    for (let i = 0; i <= num1; i++) {
        sum +=i;
    }
    alert(sum);
}else{
    alert("dữ liệu nhập vào không hợp lệ")
}