let a = +prompt("Mời nhập số nguyên");
let b = +prompt("mời nhập số mũ");
let res=1;
if (isNaN(a) || isNaN(b)) {
    alert("sai cú pháp")

} else {
    for (let i = 0; i <b;i++){
        res*=a; 
    }
    alert(res);
}