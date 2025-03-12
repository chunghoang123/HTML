let filteredArr = isPrime()
console.log(filteredArr)
function isPrime (){
    let n = +prompt(`Moi nhap so luong so muon them: `)
    let arr =[]
    for(let i=0; i<n; i++){
        let num = +prompt(`Moi nhap so: `)
      if(isNaN(num)){
        alert(`du lieu khong hop le`)
      }else{
        let check = true
        for(let j = 2; j<num ; j++){
            if(num%j==0){
                check=false
            }
        }
        if(check){
            arr.push(num) 
        }
      }
    }
    if(arr.length===0){
        alert(`Mang khong co phan tu`)
    }
    return arr

}