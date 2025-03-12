let product = [
    ["mì tôm", 5, 5000],
    ["Bánh mì", 12, 15000],
    ["bánh bao", 9, 25000],
    ["Mèn mé", 7, 5000],
]
let cart = [];

//b1 tạo menu
let menu = `
------menu--------
1. Danh sách sản phẩm
2. Mua  hàng
3. Tình tiền + Hoá đơn
4. thoát
Mời bạn nhập vào sự lựa chọn của bạn:
`;
let input = null;
while (input !== 4) {
    input = +prompt(menu);
    if (isNaN(input)) {
        console.log("Lựa chọn không hợp lệ. Vui lòng nhập số.");
        continue;
    }
    switch (input) {
        case 1:// hiển thị danh sách sản phẩm
            displayproduct(product);
            break;
        case 2://mua hàng
            let productName = prompt("Mời bạn nhập tên sản phẩm");
            let findIndex = -1
            for (let index in product) {
                if (product[index][0] === productName) {
                    findIndex = index;
                }
            }
            if (findIndex === -1) {
                console.log("ko tìm thấy sản phẩm")
            } else {
                let inCartIndex = -1;
                for (let i in cart) {
                    if (cart[i][0] === product) {
                        inCartIndex = i;
                    }
                }
                if (inCartIndex === -1) {
                    let products = product[findIndex];
                    let addProduct = [...products];
                    cart.push(addProduct);
                    console.log(cart)
                } else {
                    cart[inCartIndex][1]++;
                }
                product[findIndex][1]--
            }

            break;
        case 3://hoá đơn
        displayproduct(cart);
        let sum =0;
        for(let products of cart){
            sum = sum +products[1] * product[2]
        }
            break;
        case 4://thoát
            console.log(`thank for using the app`)
            break;
        default:
            console.log(`Lựa chọn không hợp lệ`);
            break;
    }
}

function displayproduct() {
    for (let index in productList) {
        console.log(
            `${+index + 1}. ${productList[index][0]} - Số lượng: ${productList[index][1]} - Giá: ${productList[index][2]}`
        );
    }
}