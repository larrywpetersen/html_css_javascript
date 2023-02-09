
var color = 0;

var colors = ["#faa", "#afa", "#aaf"]

function change_div() {
    div = document.getElementById("div1")
    div.style.backgroundColor = colors[color];
    color = (color + 1) % 3;
    // color = color + 1
    // if (color > 2) {
    //     color = 0;
    // }
}
