let num = +prompt("mời nhập số");
if (isNaN(num)) {
    alert("số không hợp lệ");
} else {
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            console.log("ước của " + num + " là " + i);
        }
    }
}