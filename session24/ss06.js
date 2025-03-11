let str;
let arr = [];
let choice;
while (choice !== 7) {
  choice = +prompt(`1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình
==========================
Moi nhap lua chon:`);
  switch (choice) {
    case 1:
      str = prompt(`Moi nhap chuoi: `);
      arr = str.split("");
      break;
    case 2:
      alert(str);
      break;
    case 3:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let length = arr.length;
      alert(`Do dai cua chuoi: ${length} ki tu`);
      break;
    case 4:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let num = prompt(`Moi nhap so muon kiem tra: `);
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
          count++;
        }
      }
      if (count === 0) {
        alert(`Phan tu Khong ton tai trong mang`);
      } else {
        alert(`${num} xuat hien ${count} lan trong mang`);
      }
      break;
    case 5:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let check = true;
      let arr2 = [];
      arr2 = arr.reverse();
      let k = arr.length - 1;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr2[k]) {
          check = false;
        }
        k--;
      }
      if (check) {
        alert(`Chuoi doi xung`);
      } else {
        alert(`Chuoi khong doi xung`);
      }
      break;
    case 6:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let result = ""; 

      for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i-1] == " " && str[i] != " ") {
          result += str[i].toUpperCase();
        } else {
          result += str[i];
        }
      }
      str=result
      alert(str);
      break;
    case 7:
      alert(`Thoat chuong trinh thanh cong!`);
      break;
    default:
      alert(`Lua chon khong hop le!`);
  }
}