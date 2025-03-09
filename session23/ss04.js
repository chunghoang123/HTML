let n = +prompt("mời nhập số lượng phần tử");
let arr = [];
let check;
let arr2=[];
if (n === 0) {
    alert("khong có ký tự số");
} else {
    for (let i = 0; i < n; i++) {
        let num = +prompt("mời nhập phần tử");
        arr.push(num);
        if (isNaN(arr[i])) {   
            check = false;
        }else{
            arr2.push(arr[i])
            check = true;
        }
    }
    if (check !== true) {
        alert("không có số trong mảng")
    }else{
        alert(arr2);
    }
}
