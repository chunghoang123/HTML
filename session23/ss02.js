let arr=[];
let max=0;
let check;
for(let i=0;i<10;i++){
    let input = +prompt("mời nhập phần tử");
    arr.push(input);
    if(arr[i]>max){
        max=arr[i];
        check=true;
    }
}
if(check===true){
    alert("phần tử lớn nhất là "+max+ " và nó ở vị trí "+arr.indexOf(max));
}else{
    alert("không có phần tử lớn nhất");
}