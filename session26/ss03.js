let arr = [];
let n = +prompt("Mời nhập số lượng phần tử");
for (let i = 0; i < n; i++) {
    let input = prompt("Mời nhập phần tử");
    arr.push(input);
    if(arr.length===0){
        alert("mảng ko có phần tử nào")
    }
}
let result = arr.filter(function (email) {
    return email.includes(`@`) && !email.includes(` `);
});

alert(result);