let products = [
        {
          id: 1,
          name: 'Laptop Dell XPS 15',
          price: 39990000,
          image: `./anh/Screenshot 2025-03-23 220645.png`,
          description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
        },
        {
          id: 2,
          name: 'iPhone 15 Pro Max',
          price: 32990000,
          image: './anh/Screenshot 2025-03-23 220650.png',
          description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
        },
        {
          id: 3,
          name: 'Samsung Galaxy S24 Ultra',
          price: 28990000,
          image: './anh/Screenshot 2025-03-23 220708.png',
          description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
        },
        {
          id: 4,
          name: 'Tai nghe Sony WH-1000XMS',
          price: 7999000,
          image: './anh/Screenshot 2025-03-23 220711.png',
          description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
        },
        {
          id: 5,
          name: 'Apple Watch Series 9',
          price: 11990000,
          image: './anh/Screenshot 2025-03-23 220721.png',
          description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
        },
        {
          id: 6,
          name: 'Loa JBL Charge 5',
          price: 3999000,
          image: './anh/Screenshot 2025-03-23 221923.png',
          description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
        },
      ];

products = JSON.parse(localStorage.getItem(`producs`));

  let container = document.getElementById('container');
  let btn = document.getElementById('searchBtn');
  let search = document.getElementById('search').value
btn.onclick = function(){
    render()
    let search = document.getElementById('search').value
    if(search ==""){
        displayItems()
    }else{
        products.forEach(function(product){
            let str1 = search.toLowerCase()
            let str2 = product.name.toLowerCase()
            if(str2.includes(str1)){
                product.price = product.price.toLocaleString();
                container.innerHTML +=`<div id="item">
                <img src="${product.image}" alt="">
                <b class="title">${product.name}</b>
                <p class="info">${product.description}</p>
                <span class="price">${product.price} VND</span>
                <button class="buy">Buy</button>`
            }
        })
    }
}
  displayItems();
  function displayItems(){
    products.forEach(product => {
        product.price = product.price.toLocaleString();
        container.innerHTML +=`<div id="item">
        <img src="${product.image}" alt="">
        <b class="title">${product.name}</b>
        <p class="info">${product.description}</p>
        <span class="price">${product.price} VND</span>
        <button class="buy">Buy</button>`
    })
}
function render(){
container.innerHTML =``
}
localStorage.setItem(`ss35-b3`,JSON.stringify(products));