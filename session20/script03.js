let num1 = prompt("mời bạn nhập số để kiểm tra đối xứng");
if (num1 > 0) {
        if (num1[0] === num1[num1.length - 1]) {
            alert("số " + num1 + " là đối xứng");
        }
        else {
            alert("số " + num1 + " không phải là đối xứng");
        }

} else {
    alert("số khong hợp lệ");
}