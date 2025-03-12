let filteredArr = findMax()
console.log(filteredArr)
function findMax() {
    let arr = []
    
    for(let i=0; i<10; i++){
        let num = +prompt(`Moi nhap so: `)
        if(isNaN(num)){
            alert(`du lieu khong hop le`)
          }else{
            arr.push(num)
          }
    }
    let maxInfo=[]
    let max = -Infinity; // 0 cx dc
    let maxIndex = -1;   
    arr.forEach(function(element, index) {
    if (element > max) {
        max = element;       
        maxIndex = index;    
    }
});
    maxInfo.push(`Max: ${max}`)
    maxInfo.push(`Position: ${maxIndex}`)
    return maxInfo 
}