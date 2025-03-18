let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" },
];

let cart = [];
let menu = `
------------------ DANH MỤC ------------------
1. Hiển thị các sản phẩm theo danh mục.
2. Chọn sản phẩm để mua.
3. Sắp xếp sản phẩm theo giá.
4. Tính số tiền thanh toán.
5. Thoát.
Mời bạn nhập lựa chọn:
`;

let input;
while (input !== 5) {
    input = +prompt(menu);
    switch (input) {
        case 1: // Hiển thị sản phẩm theo danh mục
            displayCategory();
            break;

        case 2: // Chọn sản phẩm để mua
            let idCategory = +prompt("Mời nhập ID sản phẩm:");
            let product = products.find(item => item.id === idCategory);
            if (!product) {
                console.log(" Sản phẩm không có trong cửa hàng.");
                break;
            }

            let quantityCategory = +prompt("Mời nhập số lượng:");
            if (quantityCategory > product.quantity) {
                alert(" Số lượng sản phẩm trong cửa hàng không đủ.");
                break;
            }

            // Kiểm tra nếu sản phẩm đã có trong giỏ hàng thì tăng số lượng
            let cartItem = cart.find(item => item.id === idCategory);
            if (cartItem) {
                cartItem.quantity += quantityCategory;
            } else {
                cart.push({ id: product.id, name: product.name, price: product.price, quantity: quantityCategory });
            }

            product.quantity -= quantityCategory;
            alert(" Mua thành công!");
            console.log(" Giỏ hàng hiện tại:", cart);
            break;

        case 3: // Sắp xếp sản phẩm theo giá
            let menu3 = `
            ----------- MENU SẮP XẾP -----------
            1. Giá tăng dần
            2. Giá giảm dần
            3. Trở lại
            Mời nhập lựa chọn:
            `;

            let input3;
            while (input3 !== 3) {
                input3 = +prompt(menu3);
                switch (input3) {
                    case 1: // Giá tăng dần
                        products.sort((a, b) => a.price - b.price)
                        console.log(" Sản phẩm sau khi sắp xếp tăng dần:", products);
                        break;
                    case 2: // Giá giảm dần
                        products.sort((a, b) => b.price - a.price);
                        console.log(" Sản phẩm sau khi sắp xếp giảm dần:", products);
                        break;
                    case 3:
                        console.log(" Trở lại menu chính.");
                        break;
                    default:
                        console.log(" Nhập sai lựa chọn.");
                        break
                }
            }
            break;

        case 4: // Tính số tiền thanh toán
            if (cart.length === 0) {
                console.log(" Giỏ hàng trống.");
            } else {
                let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
                console.log(" Tổng số tiền thanh toán:", total + " VND");
            }
            break;

        case 5:
            console.log(" Thoát chương trình.");
            break;

        default:
            console.log(" Nhập sai lựa chọn.");
            break;
    }
}

// Hàm hiển thị sản phẩm theo danh mục
function displayCategory() {
    let category = prompt("Mời nhập tên danh mục:");
    let productsCategory = products.filter(item => item.category == category);
    console.log(productsCategory.length > 0 ? productsCategory : " Không tìm thấy sản phẩm.");
}
