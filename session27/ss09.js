let test_carse1 = [2, 1, 4, 6, 18, 12, 3];
let test_carse2 = [4, 6, 5, 8, 12, 5];
let test_carse3 = "abc";
function sortEven(arr) {
    if (Array.isArray(arr)) {
        let evenArr = arr.filter(num => num % 2 === 0);
        console.log("evenArr" + evenArr);


        //săp xếp
        for (let i = 0; i < evenArr.length - 1; i++) {
            for (let j = i + 1; j < evenArr.length; j++) {
                if (evenArr[j] > evenArr[j + 1]) {
                    let temp = evenArr[j];
                    evenArr[j] = evenArr[j + 1];
                    evenArr[j + 1] = temp;

                }
            }
        }
    } else {
        console.log("dữ liệu ko hợp lệ");
    }
}