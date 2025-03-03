let a = +prompt("nhập số a");
let b = +prompt("nhập số b");
let c = +prompt("nhập số c");
let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
alert(`Số lớn nhất trong 3 số đã nhập là: ${max}`);