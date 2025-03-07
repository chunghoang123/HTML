
let arr = prompt("mời nhập dãy số");
if (isNaN(arr)) {
    alert("dãy số không hợp lệ");
} else {
    arr2 = arr.split("");
    let max=0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > max) {
            max = arr2[i];
        }
    }
    alert(max + " là số lớn nhất");

}
