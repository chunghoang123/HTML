let arr =[]
let choice
let rows
let cols
while (choice !== 7) {
    choice = +prompt(`1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
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
          let sum4=0
          let j4=0
        for (let i = 0; i < rows; i++) {
            sum4+= arr[i][j4]
            j4++
        } 
        alert(`Tong duong cheo chinh la: ${sum4}`)
        break 
    case 5:
        if (rows < 1 || cols <1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          let sum5=0
          let j5=cols-1
        for (let i = rows-1; i >=0; i--) {
            sum5+= arr[i][j5]
            j5--
        } 
        alert(`Tong duong cheo phu la: ${sum5}`)
        break 
    case 6:
        if (rows < 1 || cols <1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          let n6
          let avg6=0
          let count6=0
          let choice6= +prompt(`1.Chon hang muon tinh trung binh cong
            2.Chon cot muon tinh trung binh cong`
          )
          switch(choice6){
            case 1:
                n6=+prompt(`Moi nhap hang muon tinh: `)
                if(isNaN(n6) || n6<0 || n6>rows-1){
                    alert(`Hang Khong hop le`)
                    break
                }
                for(let j=0; j<cols; j++){
                    avg6 += arr[n6][j]
                    count6++
                }
                avg6 = avg6/count6
                alert(`Trung binh cong cua hang ${n6} la : ${avg6}`)
                break
            case 2:
                n6=+prompt(`Moi nhap cot muon tinh: `)
                if(isNaN(n6) || n6<0 || n6>cols-1){
                    alert(`cot Khong hop le`)
                    break
                }
                for(let i=0; i<rows; i++){
                    avg6 += arr[i][n6]
                    count6++
                }
                avg6 = avg6/count6
                alert(`Trung binh cong cua cot ${n6} la : ${avg6}`)
                break
            default:
                alert(`Lua chon khong hop le`)
          }
        break
    case 7:
        alert(`Thoat chuong trinh thanh cong!`);
        break
      default:
        alert(`Lua chon khong hop le!`);   
}
}