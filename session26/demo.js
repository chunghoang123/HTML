// function myFn(fn){
//     fn()

//     return () => 10;
// }
// myFn();
let numberList = [10, 30, 20, 50, 70];
// .forEach()

// numberList.forEach(function(element, index) {


//     console.log(index, element)
// });
// let newArr = numberList.map(function (element, index) {
//     return`phần tử: ${element}`

// });
// // console.log(newArr);

// numberList.filter(function(element,index){
// return element >20;

// })
numberList.reduce(function  (acc,cur){
console.log("acc",acc);
console.log("cur",cur); 
return acc + cur 
},0)


