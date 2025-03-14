let menu = `
1. Nhập danh sách số nguyên
2. Tính trung bình
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát
`;

let numbers = []; // Mảng lưu danh sách số nguyên
let choice;

while (choice !== 5) {
    choice = Number(prompt(menu)); // Chuyển prompt về số

    switch (choice) {
        case 1:
            numbers = num(); // Gọi hàm nhập số và lưu vào mảng
            console.log("Danh sách số nguyên:", numbers);
            break;
        case 2:
            console.log("Trung bình:", total(numbers));
            break;
        case 3:
            console.log("Số chẵn lớn nhất:", maxEven(numbers));
            break;
        case 4:
            console.log("Số lẻ nhỏ nhất:", minOdd(numbers));
            break;
        case 5:
            alert("Thoát");
            break;
        default:
            alert("Lựa chọn sai, vui lòng nhập lại.");
            break;
    }
}

// Nhập danh sách số nguyên
function num() {
    let arr = [];
    let n = Number(prompt("Nhập số lượng số nguyên:"));
    for (let i = 0; i < n; i++) {
        arr.push(Number(prompt(`Nhập số nguyên thứ ${i + 1}:`)));
    }
    return arr; // Trả về mảng số nguyên
}

// Tính trung bình cộng
function total(arr) {
    if (arr.length === 0) return "Không có số nào để tính";
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

// Tìm số chẵn lớn nhất
function maxEven(arr) {
    let maxEven = -Infinity;
    for (let num of arr) {
        if (num % 2 === 0 && num > maxEven) {
            maxEven = num;
        }
    }
    return maxEven === -Infinity ? "Không có số chẵn" : maxEven;
}

// Tìm số lẻ nhỏ nhất
function minOdd(arr) {
    let minOdd = Infinity;
    for (let num of arr) {
        if (num % 2 !== 0 && num < minOdd) {
            minOdd = num;
        }
    }
    return minOdd === Infinity ? "Không có số lẻ" : minOdd;
}
