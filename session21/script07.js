let money = +prompt("mời nhập số tiền");
let month = +prompt("mời nhập số tháng");
let interst = +prompt("mời nhập số tiền lãi");
let tienlai = 0;
let d=money;
interst = interst / 100;
for (let i = 0; i < month; i++) {
    tienlai = money * interst;
    money = money + tienlai;
}

alert('lai : ' +((money-d.toFixed(3))));
alert(money);
