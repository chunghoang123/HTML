let n = +prompt("Mời nhập số lượng phần tử trong mảng");
if (isNaN(n) || n <= 0) {
    alert("Số lượng phần tử phải là số nguyên dương");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let input = +prompt(`Mời nhập phần tử`);
        if (isNaN(input)) {
            alert("Dữ liệu không hợp lệ. Vui lòng nhập số");
        } else {
            arr.push(input);
        }
    }
    let result = arr.filter(function (element) {
        return element >= 10;
    });
    if (result.length === 0) {
        alert("Không có phần tử nào lớn hơn hoặc bằng 10");
    } else {
        alert(result);
    }
}