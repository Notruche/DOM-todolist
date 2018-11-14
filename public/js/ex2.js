function page1() {
    document.querySelector(".page1").style.display = "initial"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "none"
    document.querySelectorAll(".col-3")[0].classList.add("bg-primary")
    document.querySelectorAll(".col-3")[5].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[1].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[2].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[3].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[4].classList.remove("bg-primary")
}
function page2() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "initial"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "none"
    document.querySelectorAll(".col-3")[1].classList.add("bg-primary")
    document.querySelectorAll(".col-3")[0].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[5].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[2].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[3].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[4].classList.remove("bg-primary")
}
function page3() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "initial"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "none"
    document.querySelectorAll(".col-3")[2].classList.add("bg-primary")
    document.querySelectorAll(".col-3")[0].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[1].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[5].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[3].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[4].classList.remove("bg-primary")
}
function page4() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "initial"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "none"
    document.querySelectorAll(".col-3")[3].classList.add("bg-primary")
    document.querySelectorAll(".col-3")[0].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[1].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[2].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[5].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[4].classList.remove("bg-primary")
}
function page5() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "initial"
    document.querySelector(".page6").style.display = "none"
    document.querySelectorAll(".col-3")[4].classList.add("bg-primary")
    document.querySelectorAll(".col-3")[0].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[1].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[2].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[3].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[5].classList.remove("bg-primary")
}
function page6() {
    document.querySelector(".page1").style.display = "none"
    document.querySelector(".page2").style.display = "none"
    document.querySelector(".page3").style.display = "none"
    document.querySelector(".page4").style.display = "none"
    document.querySelector(".page5").style.display = "none"
    document.querySelector(".page6").style.display = "initial"
    document.querySelectorAll(".col-3")[5].classList.add("bg-primary")
    document.querySelectorAll(".col-3")[0].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[1].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[2].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[3].classList.remove("bg-primary")
    document.querySelectorAll(".col-3")[4].classList.remove("bg-primary")
}

document.querySelectorAll('button')[0].addEventListener('click', page1)
document.querySelectorAll('button')[1].addEventListener('click', page2)
document.querySelectorAll('button')[2].addEventListener('click', page3)
document.querySelectorAll('button')[3].addEventListener('click', page4)
document.querySelectorAll('button')[4].addEventListener('click', page5)
document.querySelectorAll('button')[5].addEventListener('click', page6)


