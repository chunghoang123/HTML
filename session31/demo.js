// console.log(document)
// let h1 = document.getElementById("demo-id");//truy cập duy nhất
// console.log(h1);

// //getEmlementsByClassName
// document.getElementsByClassName("demo-class");//truy cập nhiều

// let htmlList = document.getElementsByClassName("demo-class");
// console.log(htmlList);

// htmlList[0];
// htmlList[2]
// for(let i=0;i<htmlList.length;i++){
//     console.log(htmlList[i])
// }
let h1 = document.getElementById("demo-id");

console.log(h1.innerHTML)
console.log(h1.textContent);
console.log(h1.textContent);
let div = document.getElementById("demo-inner");
console.log(div.innerHTML)
console.log(div.innerText);
console.log(div.textContent);
div.innerText = "hello world"
div.innerHTML = `


<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ul>
`
console.log(div.id);
console.log(div.style)
console.log(div.children);




