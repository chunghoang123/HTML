let choice
let arr=[]
while(choice !==7){
    choice = +prompt(`1.Nhập mảng
2.Hiển thị mảng
3.Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4.Tính tổng các phần tử trong mảng
5.Tìm số lần xuất hiện của một phần tử trong mảng
6.Sắp xếp mảng tăng dần
7.Thoát chương trình
==========================
Moi nhap lua chon:`)
switch(choice){
    case 1:
        let n =+prompt(`Nhap so luong phan tu muon them: `)
        if(isNaN(n) || n<=0){
            alert(`So luong khong hop le`)
            break
        }
        for (let i=0; i<n;i++){
            let element = +prompt(`Moi nhap phan tu:`)
            if(isNaN(element)){
                alert(`Phan tu khong phai la so!`)
                i--
                continue
            }
            arr.push(element)
        }
        break
    case 2:
        alert(`Mang hien tai:
            ${arr}`)
        break;
    case 3:
        if(arr.length<1){
            alert(`Mang chua duoc nhap`)
            break
        }
        let max=arr[0]
        let min = arr[0]
        for (let i=0; i<arr.length;i++){
            if(max<arr[i]){
                max = arr[i]
            }else if(min>arr[i]){
                min = arr[i]
            }
        }
        alert(`Phan tu lon nhat trong mang la: ${max}
            Phan tu be nhat trong mang la: ${min}`)
        break
    case 4:
        if(arr.length<1){
            alert(`Mang chua duoc nhap`)
            break
        }
        let sum=0
        for (let i=0; i<arr.length;i++){
          sum += arr[i]
        }
        alert(`Tong cac phan tu trong mang la: ${sum}`)
        break
    case 5:
        if(arr.length<1){
            alert(`Mang chua duoc nhap`)
            break
        }
        let num = +prompt(`Moi nhap so muon kiem tra: `)
        let count=0
        for (let i=0; i<arr.length;i++){
           if(num===arr[i]){
            count++
           }
          }
          if(count===0){
            alert(`Phan tu Khong ton tai trong mang`)
          }else{
             alert(`${num} xuat hien ${count} lan trong mang`)
          }
        break
    case 6:
        if(arr.length<1){
            alert(`Mang chua duoc nhap`)
            break
        }
        arr.sort()
        alert(`Mang da sap xep tang dan:
            ${arr}`)
        break;
    case 7:
        alert(`Thoat chuong trinh thanh cong!`)
        break
    default:
        alert(`Lua chon khong hop le!`)
}
} 