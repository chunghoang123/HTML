let num1 = +prompt("Mời nhập số để kiểm tra có phải số nguyên tố ko ");
function ngTo(num1){
    if (isNaN(num1)) {
        alert("dữ liệu ko hợp lệ")
    } else {
        let check = true;
        for (let i = 2; i < num1; i++) {
            if (num1 % i == 0) {
                check = false;
                break;
            }
        }
        if (check == true) {
            alert("số nguyên tố");
        } else {
            alert("không phải số nguyên tố");
        }arguments
    }
}
let result=ngTo(num1);
console.log(result)