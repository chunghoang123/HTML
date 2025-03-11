
let arr = [1,6,4,8];
function min(arr) {
    let min = arr[0];
    if (arr.length == 0) {
        return "mảng ko có phần tử";
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) {
                return "mảng chứa phần tử không phải là số";
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

}
let result = min(arr)
console.log(result)