let dish = [
    { id: 1, name: "Rau sạch", category:"đồ ăn" },
    { id: 2, name: "Thị lợn", category:"đồ ăn"},
    { id: 3, name: "Pesi ko calo", category:"nước"},
    { id: 4, name: "Cocacola", category:"nước"},
    { id: 5, name: "Cờ lê", category:"dụng cụ"},
    { id: 6, name: "Tuy vít", category:"dụng cụ"},
];
function filter(){
    let category = document.getElementById("category").value;
    let result = document.getElementById("product");
    result.innerHTML = "";
    let filterDish = dish.filter(dish => dish.category === category);
    filterDish.forEach(dish => {
        let item = document.createElement("div");
        item.innerHTML = `Name : ${dish.name} - Category : ${dish.category}`
        result.appendChild(item);
        });

}
