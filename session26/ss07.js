let filteredArr = evenCheck()
console.log(filteredArr)
function evenCheck() {
    let arr =[]
    for(let i=0; i<10; i++){
        let n= +prompt(`Moi nhap phan tu: `)
        if(isNaN(n)) {
            alert(`Du lieu khong hop le`)
        }else{
            arr.push(n)
        } 
    }
    let newArr = arr.map(function(element, index){
        return element*element 
    })
       newArr = newArr.filter(function(element, index){
        return element%2==0;
    })
    if(newArr.length===0){
        console.log(`mang khong co phan tu`)
    }
    return newArr;
}