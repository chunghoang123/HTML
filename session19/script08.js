let month = +prompt("mời nhập tháng")
if (month <= 3) {
    alert("mùa xuân");
}else if (month <= 6) {
    alert("mùa hạ");
} else if (month <= 9) {
    alert("mùa thu");
} else if (month <= 12) {
    alert("mùa đông");
}else{
    alert("tháng không tồn tại");
}
