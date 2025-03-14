let arr = [];
let menu = `
-----menu-----
1. nhập danh sách sinh viên
2. Hiển thị đanh sách sinh viên
3. tìm sinh viên theo tên
4. Xoá sinh viên
5. Thoát
mời nhập lựa chọn
`
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            sutudents(arr);
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            alert("Thoát");
            break;
        default:
            alert("lựa chọn sai");
            break;

    }
}
function sutudents(arr) {
    let n = +prompt("Mời nhập số lượng sinh viên");
    if(isNaN(n)){
        alert("không phải số");
    }else{
        for (let i = 0; i < n; i++) {
            let name = prompt("Mời nhập tên");
            arr.push(name);
        }
    }
    return arr;
    
}