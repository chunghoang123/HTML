let str;
let arr = [];
let choice;
while (choice !== 7) {
  choice = +prompt(`1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế các ký tự 
7. Thoát chương trình
==========================
Moi nhap lua chon:`);
  switch (choice) {
    case 1:
      str = prompt(`Moi nhap chuoi: `);
      arr = str.split("");
      break;
    case 2:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      alert(`"${str}"`);
      break;
    case 3:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      str = str.trim();
      alert(`Ki tu sau khi da luoc bo khoang trang:
             "${str}"`);
      break;
    case 4:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      arr = arr.reverse();
      str = arr.join("");
      alert(`chuoi sau khi dao nguoc:
            ${str}`);
      break;
    case 5:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let count5 = 0;
      for (let i = 0; i < arr.length; i++) {
        Number(arr[i]);
        if (isNaN(arr[i])) {
         count5++;
        } else { 
           continue;
        }
      }
      alert(`So luong tu trong chuoi la: ${count5}`);
      break;
    case 6:
        if (arr.length < 1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          let check = false
          let loc5
          let search = prompt(`Moi nhap phan tu muon thay the`)
          for (let i = 0; i < arr.length; i++) {
            if(search == arr[i]){
                check = true
                loc5=i
            }
          }
          if(check){
            let change = prompt(`Moi nhap phan tu moi: `)
            arr.splice(loc5,1,change)
            str = arr.join("");
            alert(`chuoi moi:
                ${str}`)
          }else{
            alert(`Khong tim thay phan tu trong mang`)
          }
        break
    case 7:
      alert(`Thoat chuong trinh thanh cong!`);
      break;
    default:
      alert(`Lua chon khong hop le!`);
  }
}