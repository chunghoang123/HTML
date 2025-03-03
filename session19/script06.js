let a = +prompt(`Moi nhap so a: `)
let b = +prompt(`Moi nhap so b: `)
let c = +prompt(`Moi nhap so c: `)
let delta= b * b - 4 * a * c
let x =  -b / (2 * a)
if ( isNaN(a) || isNaN(b) || isNaN(c) ){
    alert(`Phuong trinh khong hop le`)
}else if(delta < 0){
    alert(`Phuong trinh vo nghiem`)
}else if(delta === 0){
    alert(`Phuong trinh co nghiem kep x1 = x2 = ${x}`)
}else{
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    alert(`Phuong trinh co 2 nghiem phan biet x1 = ${x1} x2 = ${x2}`)
}