let day = parseInt(prompt('moi nhap ngay:'));
let month = parseInt(prompt('moi nhap thang:'));
let zodiac = "";
if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    zodiac = "Bạch Dương (21/3 - 20/4)";
} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    zodiac = "Kim Ngưu (21/4 - 20/5)";
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    zodiac = "Song Tử (21/5 - 21/6)";
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    zodiac = "Cự Giải (22/6 - 22/7)";
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    zodiac = "Sư Tử (23/7 - 22/8)";
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    zodiac = "Xử Nữ (23/8 - 22/9)";
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    zodiac = "Thiên Bình (23/9 - 23/10)";
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    zodiac = "Bọ Cạp (24/10 - 22/11)";
} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    zodiac = "Nhân Mã (23/11 - 21/12)";
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    zodiac = "Ma Kết (22/12 - 19/1)";
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    zodiac = "Bảo Bình (20/1 - 18/2)";
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    zodiac = "Song Ngư (19/2 - 20/3)";
} else {
    zodiac = "Ngày sinh không hợp lệ!";
}
alert(zodiac);