
let dishes = {
    main: [],
    drinks: [],
  
    desserts: [],
  };
  let choice;
  let menu = `
  1.Thêm món ăn vào danh mục.
  2.Xóa món ăn theo tên khỏi danh mục.
  3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
  4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
  5.Tìm kiếm món ăn theo tên trong toàn bộ menu.
  6.Thoát
  ==========================
  Moi nhap lua chon: `;
  while (choice !== 6) {
    choice = +prompt(menu);
    switch (choice) {
      case 1:
        addDish();
        break;
      case 2:
        removeDish();
        break;
      case 3:
        updateDish();
        break;
      case 4:
        displayDishes(dishes);
        break;
      case 5:
          displayDishByName()
        break;
      case 6:
        alert(`Da thoat chuong trinh!`);
        break;
      default:
        alert(`Lua chon khong hop le!`);
    }
  }
  function addDish() {
    let category = +prompt(`
      Moi chon danh muc muon them mon an vao
      1. Main Dishes
      2. Drinks
      3. Desserts
      `);
    switch (category) {
      case 1:
        dishInfo("main");
        break;
      case 2:
        dishInfo("drinks");
        break;
      case 3:
        dishInfo("desserts");
        break;
      default:
        alert(`Danh muc khong hop le!`);
    }
  }
  function dishInfo(category) {
    let name = prompt(`Moi nhap mon:`);
    let price = +prompt(`Moi nhap gia: `);
    let description = prompt(`Moi nhap mo ta mon: `);
    dishes[category].push({ name, price, description });
  }
  function removeDish() {
    let dish = prompt(`Moi nhap ten mon an muon xoa`);
    let findIndex = -1;
    let category = +prompt(`
          Moi chon danh muc muon xoa mon an 
          1. Main Dishes
          2. Drinks
          3. Desserts
          `);
    switch (category) {
      case 1:
        for (let i = 0; i < dishes.main.length; i++) {
          if (dishes.main[i].name === dish) {
            alert(`Da xoa mon an ${dish} thanh cong!`);
            delete dishes.main[i];
            findIndex = i;
            break;
          }
        }
        if (findIndex == -1) {
          alert(`Mon an ${dish} khong co trong danh muc nay!`);
        }
        break;
      case 2:
        for (let i = 0; i < dishes.drinks.length; i++) {
          if (dishes.drinks[i].name === dish) {
            alert(`Da xoa mon an ${dish} thanh cong!`);
            delete dishes.drinks[i];
            findIndex = i;
            break;
          }
        }
        if (findIndex == -1) {
          alert(`Mon an ${dish} khong co trong danh muc nay!`);
        }
        break;
      case 3:
        for (let i = 0; i < dishes.desserts.length; i++) {
          if (dishes.desserts[i].name === dish) {
            alert(`Da xoa mon an ${dish} thanh cong!`);
            delete dishes.desserts[i];
            findIndex = i;
            break;
          }
        }
        if (findIndex == -1) {
          alert(`Mon an ${dish} khong co trong danh muc nay!`);
        }
        break;
      default:
        alert(`Danh muc khong hop le!`);
    }
  }
  function updateDish() {
    let dish = prompt(`Moi nhap ten mon an muon cap nhat`);
    let findIndex = -1;
    let category = +prompt(`
          Moi chon danh muc muon cap nhat mon an 
          1. Main Dishes
          2. Drinks
          3. Desserts
          `);
    switch (category) {
      case 1:
        for (let i = 0; i < dishes.main.length; i++) {
          if (dishes.main[i].name === dish) {
            let name = prompt(`Moi nhap ten mon moi:`);
            let price = +prompt(`Moi nhap gia: `);
            let description = prompt(`Moi nhap mo ta mon: `);
            dishes.main[i].description = description;
            dishes.main[i].name = name;
            dishes.main[i].price = price;
            alert(`Da cap nhat thong tin thanh cong!`);
            findIndex = i;
            break;
          }
        }
        if (findIndex == -1) {
          alert(`Mon an ${dish} khong co trong danh muc nay!`);
        }
        break;
      case 2:
        for (let i = 0; i < dishes.drinks.length; i++) {
          if (dishes.drinks[i].name === dish) {
            let name = prompt(`Moi nhap ten mon moi:`);
            let price = +prompt(`Moi nhap gia: `);
            let description = prompt(`Moi nhap mo ta mon: `);
            dishes.drinks[i].description = description;
            dishes.drinks[i].name = name;
            dishes.drinks[i].price = price;
            alert(`Da cap nhat thong tin thanh cong!`);
            findIndex = i;
            break;
          }
        }
        if (findIndex == -1) {
          alert(`Mon an ${dish} khong co trong danh muc nay!`);
        }
  
        break;
      case 3:
        for (let i = 0; i < dishes.desserts.length; i++) {
          if (dishes.desserts[i].name === dish) {
            let name = prompt(`Moi nhap ten mon moi:`);
            let price = +prompt(`Moi nhap gia: `);
            let description = prompt(`Moi nhap mo ta mon: `);
            dishes.desserts[i].description = description;
            dishes.desserts[i].name = name;
            dishes.desserts[i].price = price;
            alert(`Da cap nhat thong tin thanh cong!`);
            findIndex = i;
            break;
          }
        }
        if (findIndex == -1) {
          alert(`Mon an ${dish} khong co trong danh muc nay!`);
        }
  
        break;
      default:
        alert(`Danh muc khong hop le!`);
    }
  }
  function displayDishByName() {
      let name = prompt(`Moi nhap ten mon muon tim:`)
      let arr = []
      Object.keys(dishes).forEach(category => {
          let matchingItems = dishes[category].filter(dish => dish.name === name);
  
          // Nếu có món khớp, thêm vào kết quả
          if (matchingItems.length > 0) {
              arr[category] = matchingItems;
          }
         
      })
      displayDishes(arr)
  }
  function displayDishes(dishes) {
    console.log(`=========================`);
    console.log("Danh sach Mon An:");
    Object.keys(dishes).forEach((category) => {
      console.log(`~~~Category: ${category}~~~`);
      dishes[category].forEach((item, index) => {
        console.log(`===Item: ${index + 1}===`);
        console.log(`Name: ${item.name}`);
        console.log(`Price: ${item.price}`);
        console.log(`Description: ${item.description}`);
        console.log(`=========================`);
      });
    });
  }
  