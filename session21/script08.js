for (i = 100; i < 1000; i++) {
    let num1 = Math.floor(i / 100)
    let num2 = Math.floor((i % 100) / 10)
    let num3 = i % 10
    let total = Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3)
    if (total === i) {
        console.log(i)
    }
}