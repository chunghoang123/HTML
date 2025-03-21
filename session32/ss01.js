document.getElementById("color").onclick=function () {
    let red = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let opacity = Math.random().toFixed(2);
    document.body.style.backgroundColor = `rgba(${red} ,${blue} ,${green},${opacity})`
}
