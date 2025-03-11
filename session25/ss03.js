let arr = [11, 4, 65, 6];
let check=true;
function even(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
          console.log(arr[i])
          check = true;
        }else if(Number.isInteger(arr)){
            alert("dữ liệu ko hợp lệ")
        }
    }
    if(!true){
        alert("ko có số chẵn")
    }
}
console.log(even(arr))

