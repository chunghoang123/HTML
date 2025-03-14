let menu = `
-----menu-----
1. Tính diện tích hình tròn
2. Tính chu vi hình tròn
3. Tính diện tích hình chữ nhật
4. Tính chu vi chữ nhật
5. thoát
Mời nhập lựa chọn
`
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let r1 = +prompt("Nhập bán kính hình tròn");
            if (isNaN(r1)) {
                alert("Số nhập vào không hợp lệ");
            } else {
                circleArea(r1);
                alert(circleArea(r1));
            }
            break;
        case 2:
            let r2 = +prompt("Nhập bán kính hình tròn");
            if (isNaN(r2)) {
                alert("Số nhập vào không hợp lệ");
            } else {
                circlePerimeter(r2)
                alert(circlePerimeter(r2));
            }
            break;
        case 3:
            let a = +prompt("Nhập chiều dài hình chữ nhật");
            let b = +prompt("Nhập chiều rộng hình chữ nhật");
            if (isNaN(a) || isNaN(b)) {
                alert("Số nhập vào không hợp lệ");
            } else {
                rectangleArea(a, b)
                alert(rectangleArea(a, b));
            }
            break;
        case 4:
            let a2 = +prompt("Nhập chiều dài hình chữ nhật");
            let b2 = +prompt("Nhập chiều rộng hình chữ nhật");
            if (isNaN(a2) || isNaN(b2)) {
                alert("Số nhập vào không hợp lệ");
            } else {
                rectanglePerimeter(a2, b2)
                alert(rectanglePerimeter(a2, b2));
            }
            break;
        case 5:
            alert("thoát");
            break;
        default:
            alert("lựa chọn sai")
            break;

    }
}
function circleArea(r1) {
    return Math.PI * r1 * r1;
}
function circlePerimeter(r2) {
    return 2 * Math.PI * r2;
}
function rectangleArea(a, b) {
    return a * b;
}
function rectanglePerimeter(a2, b2) {
    return 2 * (a2 + b2);
}
