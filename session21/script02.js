let count = 0;
let count1 = 0;
for (let i = 0; i < 5; i++) {
    let num = +prompt("mời bạn nhập 5 số nguyên");
    if (isNaN(num)) {
        alert("số nhập vào không phải là số");
    } else {
        if (num % 2 == 0) {
            count++;
        }else{
            count1++;
        }
    }
}
alert("số lượng số chẵn là " + count + " và số lượng số lẻ là " + count1);