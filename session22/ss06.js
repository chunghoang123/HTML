let arr=[2,5,7,4,1,8,6,2,5,7];
let num =+prompt("mời nhập số cần check: ")
let count = 0;
for(let i=0;i<arr.length;i++){
    if(num===arr[i]){
        count++;
    }
}
alert(`${num} xuất hiện ${count} lần trong mảng`);