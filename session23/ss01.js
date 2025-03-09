let arr=[];
let check = true;
for(let i=0;i<10;i++){
    let input = +prompt("mời nhập số")
    arr.push(input);
}
for(let i=0;i<10;i++){
    if(arr[i]>=10){
        alert(arr[i]);
    }

}
if(check==false){
    alert("không có số nào lớn hơn 10");
}
