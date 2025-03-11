let choice;
let arr = [];
while (choice !== 7) {
  choice = +prompt(`1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
==========================
Moi nhap lua chon:`);
  switch (choice) {
    case 1:
      let n = +prompt(`Nhap so luong phan tu muon them: `);
      if (isNaN(n) || n <= 0) {
        alert(`So luong khong hop le`);
        break;
      }
      for (let i = 0; i < n; i++) {
        let element = +prompt(`Moi nhap phan tu:`);
        if (isNaN(element)) {
          alert(`Phan tu khong phai la so!`);
          i--;
          continue;
        }
        arr.push(element);
      }
      break;
    case 2:
      alert(`Mang hien tai:
            ${arr}`);
      break;
    case 3:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let odd = [];
      let even = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          even.push(arr[i]);
        } else {
          odd.push(arr[i]);
        }
      }
      alert(`Cac phan tu chan: ${even}
            Cac phan tu le: ${odd}`);
      break;
    case 4:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      sum = sum / arr.length;
      alert(`Trung binh cong cua mang la: ${sum}`);
      break;
    case 5:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let location = +prompt(`Moi nhap vi tri cua phan tu muon xoa: `);
      if (location < 0 || isNaN(location || location > arr.length - 1)) {
        alert(`Vi tri khong hop le`);
        break;
      }
      arr.splice(location, 1);
      alert(`Mang sau khi xoa:
        ${arr}`);
      break;
    case 6:
        if (arr.length < 1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          let second_smallest
          let arr2=[]
       arr2 = arr.sort()
        let max = arr2[arr2.length-1]
        for(i=arr2[arr2.length-1]; i>=0;i--){
            if(arr2[i]===max){
                continue
            }else if(arr2[i]<max){
                second_smallest=arr2[i]
                break
            }
        }
        alert(`So lon thu hai trong mang la : ${second_smallest}`)
      break;
    case 7:
      alert(`Thoat chuong trinh thanh cong!`);
      break
    default:
      alert(`Lua chon khong hop le!`);
  }
}