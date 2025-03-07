let choice;
let arr = [];
while (choice !== 6) {
    choice = +prompt(`
        ----MENU----
      1. nhập vào mảng 
      2. in ra mảng
      3. thêm phần tử
      4. Sửa phần tử
      5. xóa phần tử
      6. thoát
      chọn chức năng 1-6
      `);

    switch (choice) {
        case 1:
            let n = +prompt("nhập vào số phần tử");
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt("nhập vào phần tử thứ " + (i + 1));
            }
            break;
        case 2:
            for (let i = 0; i < arr.length; i++) {
                alert("các phần tử trong màng gồm " + arr[i]);
            }
            break;
        case 3:
            let addNumber = +prompt("mời nhập vị trí muốn thêm");
            let addValue = +prompt("mời nhập giá trị muốn thêm");
            arr.splice(addNumber - 1, 0, addValue);
            break;
        case 4:
            let editNumber = +prompt("mời nhập vị trí muốn sửa");
            let editValue = +prompt("mời nhập giá trị muốn sửa");
            arr[editNumber - 1] = editValue;
            break;
        case 5:
            let deleteNumber = +prompt("mời nhập vị trí muốn xóa");
            arr.splice(deleteNumber - 1, 1);
            break;
        case 6:
            default:
                
            alert("thoát");
            break;

        
    }

}

