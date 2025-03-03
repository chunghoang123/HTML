let result = "javascript" + 5;
// result = javascript5 
// vì "javascript" là 1 chuỗi nên dấu + ở đây sẽ đc hiểu là để nối chuỗi
let result1 = "javascript" - 1;
// result = Nan vì toán tử - chỉ áp dụng cho các chữ số mà "javascript" lại là 1 chuỗi nên kết quả sẽ không trả về 1 số
let result2 = "3" + 2;
// result = 32 
// vì "3" là 1 chuỗi nên dấu + ở đây sẽ đc hiểu là để nối chuỗi
let result3 = "5" - 4;
let result4 = isNaN( "123");
let result5 = isNaN("hello");
let result6 = Number.isNaN("123");
let result7 = Number.isNaN(NaN);