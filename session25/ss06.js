let str = prompt("mời bạn nhập số để kiểm tra đối xứng");
for (let i = str.length; i > 0; i--) {
    if (str[i] == str) {
        alert("chuỗi của bạn là đối xứng");
    }
    else {
        alert("chuỗi của bạn không phải là đối xứng");
    }
} 