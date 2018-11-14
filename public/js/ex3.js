document.querySelector('.go').addEventListener('click', change)

function change() {
    var texte = document.querySelectorAll('input')[0].value;
    document.querySelector('span').innerText = texte
    document.querySelectorAll('input')[0].value = ""
}