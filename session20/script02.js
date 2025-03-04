let input = parseInt(prompt("Nhập số N:"));  
let N = input;  

if (N <= 0) {  
    console.log("Dữ liệu nhập vào không hợp lệ");  
} else {  
    let result = "";  
    for (let i = 1; i <= N; i = i +1) {  
        if (i % 5 === 0) {  
            if (result !== "") {  
                result += ", ";  
            }  
            result += i;  
        }  
    }  
    console.log(`Các số chia hết cho 5 từ 1 đến` + " " + N + " " + `là:` + result);  
}