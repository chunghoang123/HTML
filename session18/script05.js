let exp = +prompt("Mời nhập sô năm kinh nghiệm");
if(exp>6){
    alert("Quản lí");
}else if(exp >4){
    alert("Chuyên viên");
}else if(exp>1){
    alert("NV có kinh nghiệm");
}else if(exp<1){
    alert("Mới vào nghề");
}else{
    alert("sai cú pháp")
}