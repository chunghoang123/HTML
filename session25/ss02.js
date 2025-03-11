function sum(a,b){
    if(!Number.isInteger(a)||!Number.isInteger(b)){
        return "Dữ liệu ko hợp lệ";
    }
    return a+b;
}
let a= +prompt("Mời nhập a");
let b= +prompt("Mời nhập b");
console.log(sum(a,b));