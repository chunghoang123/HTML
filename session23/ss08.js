let arr = []
let n = +prompt(`Moi nhap so luong phan tu: `)
if(n<0 ){
    alert(`so luong phan tu khong duoc nho hon 0`)
}else if(n==0){
    alert(`Mang khong co phan tu`)
}else if(isNaN(n)){
    alert(`so luong khong hop le`)
}else{
    for(let i=0;i<n;i++){
       arr[i]= +prompt(`Moi nhap so: `)
    }
    let  check = true
    for (let i = 2; i <arr.length;i++) {
         if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            check = false;
            break;
            }
        }
    if(check){
        alert(`La day so fibonacci`)
    }else{
        alert(`Khong la day so fibonacci`)
    }



}