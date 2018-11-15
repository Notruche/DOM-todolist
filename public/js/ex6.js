function method1() {
    let a = parseInt(document.querySelectorAll('input')[1].value);
    let b = parseInt(document.querySelectorAll('input')[2].value);
    document.querySelector('.result').innerText = (a + b)
    document.querySelectorAll('input')[1].value = ""
    document.querySelectorAll('input')[2].value = ""
}

let debut = ""
let fin = ""
let signe = ""
let suite = false
let addition = false
let soustraction = false
let multiplication = false
let division = false

document.querySelector('.égal').addEventListener('click', method1)


document.querySelectorAll('.tou')[0].addEventListener('click', un)
document.querySelectorAll('.tou')[1].addEventListener('click', deux)
document.querySelectorAll('.tou')[2].addEventListener('click', trois)
document.querySelectorAll('.tou')[4].addEventListener('click', quatre)
document.querySelectorAll('.tou')[5].addEventListener('click', cinq)
document.querySelectorAll('.tou')[6].addEventListener('click', six)
document.querySelectorAll('.tou')[8].addEventListener('click', sept)
document.querySelectorAll('.tou')[9].addEventListener('click', huit)
document.querySelectorAll('.tou')[10].addEventListener('click', neuf)
document.querySelectorAll('.tou')[13].addEventListener('click', zéro)
document.querySelectorAll('.tou')[11].addEventListener('click', fois)
document.querySelectorAll('.tou')[14].addEventListener('click', égal)
document.querySelectorAll('.tou')[7].addEventListener('click', moins)
document.querySelectorAll('.tou')[15].addEventListener('click', divisé)
document.querySelectorAll('.tou')[3].addEventListener('click', plus)
document.querySelectorAll('.tou')[12].addEventListener('click', C)

function un() {
    if (suite == true) {
        fin += "1"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "1"
        document.querySelectorAll('input')[3].value = debut
    }
}

function deux() {
    if (suite == true) {
        fin += "2"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "2"
        document.querySelectorAll('input')[3].value = debut
    }
}

function trois() {
    if (suite == true) {
        fin += "3"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "3"
        document.querySelectorAll('input')[3].value = debut
    }
}

function quatre() {
    if (suite == true) {
        fin += "4"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "4"
        document.querySelectorAll('input')[3].value = debut
    }
}
function cinq() {
    if (suite == true) {
        fin += "5"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "5"
        document.querySelectorAll('input')[3].value = debut
    }
}
function six() {
    if (suite == true) {
        fin += "6"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "6"
        document.querySelectorAll('input')[3].value = debut
    }
}
function sept() {
    if (suite == true) {
        fin += "7"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "7"
        document.querySelectorAll('input')[3].value = debut
    }
}
function huit() {
    if (suite == true) {
        fin += "8"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "8"
        document.querySelectorAll('input')[3].value = debut
    }
}
function neuf() {
    if (suite == true) {
        fin += "9"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "9"
        document.querySelectorAll('input')[3].value = debut
    }
}
function zéro() {
    if (suite == true) {
        fin += "0"
        document.querySelectorAll('input')[3].value = debut + signe + fin
    }
    else {
        debut += "0"
        document.querySelectorAll('input')[3].value = debut
    }
}
function plus() {
    if (suite == true) {

    }
    else {
        suite = true
        signe = " + "
        document.querySelectorAll('input')[3].value = debut + signe
        addition = true
    }
}
function moins() {
    if (suite == true) {

    }
    else {
        suite = true
        signe = " - "
        document.querySelectorAll('input')[3].value = debut + signe
        soustraction = true
    }
}
function fois() {
    if (suite == true) {

    }
    else {
        suite = true
        signe = " * "
        document.querySelectorAll('input')[3].value = debut + signe
        multiplication = true

    }
}
function divisé() {
    if (suite == true) {

    }
    else {
        suite = true
        signe = " / "
        document.querySelectorAll('input')[3].value = debut + signe
        division = true
    }
}
function égal() {
    if (suite == true) {
        if (addition == true) {
            document.querySelectorAll('input')[3].value = parseInt(debut) + parseInt(fin)
        }
        else if (soustraction == true) {
            document.querySelectorAll('input')[3].value = parseInt(debut) - parseInt(fin)
        }
        else if (division == true) {
            document.querySelectorAll('input')[3].value = parseInt(debut) / parseInt(fin)
        }
        else if (multiplication == true) {
            document.querySelectorAll('input')[3].value = parseInt(debut) * parseInt(fin)
        }
        debut = ""
        signe = ""
        fin = ""
        suite = false
        addition = false
        soustraction = false
        multiplication = false
        division = false
    }
    else {

    }
}

function C() {
    debut = ""
    signe = ""
    fin = ""
    suite = false
    addition = false
    soustraction = false
    multiplication = false
    division = false
    document.querySelectorAll('input')[3].value = ""
}