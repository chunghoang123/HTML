let num1 = parseInt(prompt(`Nhập vào số thứ nhất :`));
let num2 = parseInt(prompt(`Nhập vào số thứ hai :`));
let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
alert(randomNum);