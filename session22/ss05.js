let arr = [1, 4, 7, 8, 3];
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sum1 += arr[i];
    } else {
        sum2 += arr[i];
    }
}
alert(`
        tổng các số chẵn là:${sum1} 
        tổng các số lẻ là:${sum2}`);
