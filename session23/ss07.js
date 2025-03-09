let n = +prompt("mời bạn nhập số lượng phần tử");
let arr = [];
let max = 0;
let secondMax = 0;
if (isNaN(n)) {
    alert("số lượng phần tử không phải là số");
} else if (n == 0) {
    alert("mảng ko có phần tử nào");
} else if (n < 0) {
    alert("số lượng phần tử không thể âm");
} else {
    for (let i = 0; i < n; i++) {
        let num = +prompt("Mời bạn nhập giá trị");
        arr.push(num);
        if (arr[i] > max) {
            secondMax = max
            max = arr[i];
        } else if (arr[i] > secondMax && max > arr[i]) {
            secondMax = arr[i];
        }
    }
    alert(secondMax);
}
