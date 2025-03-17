let products = [
    {
        id: 1,
        name: "mì",
        price: 5000,
        category: "đồ ăn",
        quantity: 12,
    },
    {
        id: 2,
        name: "miến",
        price: 5000,
        category: "đồ ăn",
        quantity: 12,
    },
    {
        id: 3,
        name: "bột",
        price: 5000,
        category: "đồ ăn",
        quantity: 12,
    },
]
let menu =
    `
------------------------MENU------------------------
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.
mời nhập lựa chọn:
`
let input;
while (input !== 7) {
    input = +prompt(menu);
    switch (input) {
        case 1://Thêm sản phẩm vào danh sách sản phẩm.
            let name = prompt("nhập tên");
            let price = +prompt("nhập giá");
            let category = prompt("nhập loại");
            let quantity = +prompt("nhập số lượng");
            let product = {
                id: Math.floor(Math.random() * 1000),
                name,
                price,
                category,
                quantity
            }
            products.push(product);
            displayContact();
            break;
        case 2:// Hiển thị tất cả sản phẩm.
            displayContact();
            break;
        case 3://Hiển thị chi tiết sản phẩm theo id.
            let id = +prompt("nhập id");
            let findIndex = search("id", id)
            if (findIndex !== -1) {
                console.log(products[findIndex]);
            } else {
                console.log("không tìm thấy");
            }
            break;
        case 4://Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm
            let idUpdate = +prompt("nhập id");
            let findIndexUpdate = search("id", idUpdate)
            if (findIndexUpdate !== -1) {
                let nameUpdate = prompt("nhập tên");
                let priceUpdate = +prompt("nhập giá");
                let categoryUpdate = prompt("nhập loại");
                let quantityUpdate = +prompt("nhập số lượng");
                products[findIndexUpdate].name = nameUpdate;
                products[findIndexUpdate].price = priceUpdate;
                products[findIndexUpdate].category = categoryUpdate;
                products[findIndexUpdate].quantity = quantityUpdate;
                displayContact();
            } else {
                console.log("không tìm thấy");
            }
            break;
        case 5://Xóa sản phẩm theo id.
            let idDelete = +prompt("nhập id");
            let findIndexDelete = search(id, idDelete);
            if (findIndexDelete !== -1) {
                products.splice(findIndexDelete, 1);
                displayContact();
            } else {
                console.log("không tìm thấy");
            }
            break;
        case 6://Lọc sản phẩm theo khoảng giá.
        let min = +prompt("nhập giá tối thiểu");
        let max = +prompt("nhập giá tối đa");
        let filterProduct = products.filter(product => product.price >= min && product.price <= max);
        console.log(filterProduct);
        break;
        case 7://Thoát
            console.log("thoát");
            break;
        default:
            alert("lựa chọn không hợp lệ");
            break;


    }

}
function displayContact() {
    products.forEach((product, index) => {
        console.log(`${index + 1}.id:${product.id}- Tên: ${product.name} - Giá: ${product.price} - Loại: ${product.category} - Số Lượng: ${product.quantity}`);
    });
}
function search(key, value) {
    let findIndex = -1;
    for (let i in products) {
        if (products[i][key] == value) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}