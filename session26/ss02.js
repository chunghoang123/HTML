let arr=[];
let n =+prompt("mời nhập số lượng phần tử");
check(arr);
let result=arr.filter(function(element,index){
    return element.length>5;
})
alert(result)
function check(arr){
    for (let i = 0; i < n; i++) {
        let input = prompt("mời nhập phần tử");
        arr.push(input);
        if (arr.length === 0) {
            alert("mảng ko có phần tử nào");
        } 
    }
}