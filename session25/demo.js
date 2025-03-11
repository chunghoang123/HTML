
//khai báo hàm
function calculateSum(number1,number2) {
return  number1 + number2;





}



//thực thi hàm
let sum = calculateSum(10,20);
calculateSum(1,2);
calculateSum(-2,3);
console.log(sum);

//hàm ko tên

let result = (function(a,b){
    return a*b;
})(10,20);;
console.log(result)
let calculateResult= function(a,b){
    return a/b;
};



calculateResult(10,20);