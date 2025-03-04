let str = prompt("Mời nhập chuỗi kí tự");
let search = prompt("mời nhập kí tự cần tìm");
let check = false;
for (let i = 0; i < str.length; i++) {

    if (str[i] === search) {
        check = true
    }
}
if(check==true){
    alert("Có kí tự cần tìm");
}
else{
    alert("Không có kí tự cần tìm");
}

