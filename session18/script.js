let salary = prompt("nhập vào tiền lương(triệu VNĐ)");
if (salary <5000000) {
    console.log(`thuế bạn cần đóng là 0 VNĐ`)
} else if (salary < 10000000) {
    let taxRate = salary *0.05;
    taxRate = taxRate.toLocaleString("vi-VN")
    console.log(`thuế bạn cần đóng là ${taxRate} VNĐ`)
    
} else if (salary < 18000000) {
    let taxRate = salary *0.1;
    taxRate = taxRate.toLocaleString("vi-VN")
    console.log(`thuế bạn cần đóng là ${taxRate} VNĐ`)
} else if (salary < 32000000) {
    let taxRate = salary *0.15;
    taxRate = taxRate.toLocaleString("vi-VN")
    console.log(`thuế bạn cần đóng là ${taxRate} VNĐ`)
} else if (salary >= 32000000) {
    let taxRate = salary *0.2;
    taxRate = taxRate.toLocaleString("vi-VN")
    console.log(`thuế bạn cần đóng là ${taxRate} VNĐ`)
} else {
}