let arr =[]
let choice
let rows
let cols
while (choice !== 7) {
    choice = +prompt(`1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
==========================
Moi nhap lua chon:`);
  switch(choice){
    case 1:
        rows = +prompt(`Moi nhap so hang: `)
         cols = +prompt(`Moi nhap so cot: `)
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
            for (let j = 0; j < cols; j++) {
                let value = +prompt(`Moi nhap gia tri cho phan tu [${i}][${j}]:`);
                arr[i][j] = value;
            }
        }
        break
    case 2:
        if (rows < 1 || cols <1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          
        console.log(arr)
        alert(`Mang da duoc in ra phan console`)
        break
    case 3:
        if (rows < 1 || cols <1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          let sum=0
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                sum += arr[i][j]
            }
        }  
        alert(`Tong cac phan tu trong mang: ${sum}`)
        break
    case 4:
        if (rows < 1 || cols <1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          let loc_i
          let loc_j
          let max = 0
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if(max<arr[i][j]){
                    loc_i=i
                    loc_j=j
                    max=arr[i][j]
                }
            }
        }  
        alert(`phan tu lo nhat trong mang la: ${max}
            Chi so: arr[${loc_i}][${loc_j}]`)
            break
        case 5:
            if (rows < 1 || cols <1) {
                alert(`Mang chua duoc nhap`);
                break;
              }
              let n = +prompt(`Moi nhap so hang muon tim trung binh cong: `)
              if(isNaN(n)|| n<0 || n>rows-1){
                alert(`hang khong hop le`)
                break
              }
              let avg =0
              let sum5=0
                for (let j = 0; j < cols; j++) {
                   sum5 += arr[n][j]
                   avg++
                }
                avg=sum5/avg
                alert(`Trung binh cong cua hang ${n} la : ${avg}`)
                break
        case 6:  if (rows < 1 || cols <1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
            for (let i = 0; i < rows; i++) {
                arr[i].reverse()
            }
            console.log(arr)
        alert(`Mang moi da duoc in ra phan console`)
            break  
        case 7:
            alert(`Thoat chuong trinh thanh cong!`);
            break
          default:
            alert(`Lua chon khong hop le!`);
  }
}