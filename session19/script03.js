let num1 = +prompt("mời chọn mệnh gia cần đổi ( 1- VN->USD) ( 2-USD->VN)")
if (num1 === 1) {
    let VN = +prompt("mời nhập mệnh giá VNĐ");
    let USD = VN / 23000;
    alert("mệnh giá USD là: " + USD + " USD");
} else if (num1 === 2) {
    let USD1 = +prompt("mời nhập mệnh giá USD");
    let VN1 = USD1 * 23000;
    alert("mệnh giá VNĐ là: " + VN1 + " VNĐ");
} else {
    alert("sai cú pháp");
}
