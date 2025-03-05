let n = +prompt("Nhập vào một số nguyên n bất kỳ");  

if (isNaN(n) || n < 1) {  
    console.log("Số không hợp lệ. Vui lòng nhập một số nguyên dương.");  
} else {  
    let count = 0;
    let num = 2;  
    console.log("Các số nguyên tố đầu tiên là");  

    while (count < n) {  
        let check = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {  
            if (num % i === 0) {  
                check = false;
                break;  
            }  
        }  
        if (check) {  
            console.log(num);  
            count++;  
        }  
        num++;
    }  
}