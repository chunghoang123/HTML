let arr = [];
let count = 0;
let n = +prompt("mời nhập số lượng");
let check = true
function result(arr){
    if (n < 0) {
        alert("nhập sai giá trị");
    
    } else if (isNaN(n)) {
        alert("sai dữ liệu");
    } else {
        for (let i = 0; i < n; i++) {
            let num = +prompt("mời nhập giá trị");
            arr.push(num);
            if (arr[i] > 0 && Number.isInteger(arr[i])) {
                count++;
                check = true
            }
        }
        if (!true) {
            alert("không có số nguyên trong mảng");
        } else {
            alert(count);
        }
    }
}
console.log(result(arr))