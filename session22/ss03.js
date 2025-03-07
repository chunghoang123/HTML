let arr = [];
arr = prompt("mời nhập dãy số bất kì");
if (isNaN(arr)) {
    alert("dãy số không hợp lệ");
} else {
    let arr2 = arr.split("")
    arr2.reverse();
    arr2= arr2.join("")
    alert("dãy số đảo ngược " + arr2);


}
