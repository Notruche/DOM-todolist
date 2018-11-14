document.querySelector('.ima').addEventListener('click', clone)

function clone() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "./public/img/mini peko.png");
    x.setAttribute("width", "150");
    x.setAttribute("height", "150");
    x.setAttribute("alt", "Peko");
    let y = document.querySelector(".page5")
    y.appendChild(x);

}