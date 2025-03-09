let n = +prompt("mời nhập số lượng phần tử");
let arr = [];
let count = 0;
let check;
if (isNaN(n) || n < 0) {
    alert("số lượng phần tử không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let num = +prompt("mời nhập phần tử");
        arr.push(num);
        if (arr[i] < 0) {
            count++;
            check = true
        }
    }
    if (check === true) {
        alert("mảng có " + count + " phần tử âm");
    } else if(n===0) {
        alert("mảng ko có phần tư")
    }
}


