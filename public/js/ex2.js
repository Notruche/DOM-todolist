document.querySelector(".page2").style.display = "none"
document.querySelector(".page3").style.display = "none"
document.querySelector(".page4").style.display = "none"
document.querySelector(".page5").style.display = "none"
document.querySelector(".page6").style.display = "none"

function page1() {
    document.querySelector(".page1").style.display = "initial"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "none"
}
function page2() {
    document.querySelector(".page1").style.display = '"none'
    document.querySelector(".page2").style.display = "initial"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "none"
}
function page3() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "initial"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "none"
}
function page4() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "initial"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "none"
}
function page5() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "initial"
    document.querySelector(".page6").style.display = "none"
}
function page6() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "initial"
}

document.querySelectorAll('a')[0].addEventListener('click', page1)
document.querySelectorAll('a')[1].addEventListener('click', page2)
document.querySelectorAll('a')[2].addEventListener('click', page3)
document.querySelectorAll('a')[3].addEventListener('click', page4)
document.querySelectorAll('a')[4].addEventListener('click', page5)
document.querySelectorAll('a')[5].addEventListener('click', page6)


