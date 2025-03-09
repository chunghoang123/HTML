let n = +prompt("mời nhập số lượng phần tử");
let arr = [];
let check;
let sum=0;
if(n<0){
    alert("số lượng phần tử không được âm");
}else{
    if (n === 0) {
        alert("khong có phần tử");
    } else {
        for (let i = 0; i < n; i++) {
            let num = +prompt("mời nhập phần tử");
            arr.push(num);
            if (isNaN(arr[i])) {   
                check = false;
            }else{
                sum +=arr[i];
                check = true;
            }
        }
        if (check !== true) {
            alert("không có số trong mảng")
        }else{
            alert(sum);
        }
    }

}