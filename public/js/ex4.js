var rouge = document.createElement('div')
rouge.style.backgroundColor = "red"
rouge.style.padding = "30px"
var contenant = document.querySelector('.bleu1')
contenant.appendChild(rouge)
var i = 0
document.querySelector('.btn-success').innerText = "Nombre de clics " + i


document.querySelector('.btn-warning').addEventListener('click', move)

function move() {
    if (contenant == document.querySelector('.bleu2')) {
        contenant = document.querySelector('.bleu1')
        contenant.appendChild(rouge)
        i += 1
        document.querySelector('.btn-success').innerText = "Nombre de clics " + i

    }
    else {
        contenant = document.querySelector('.bleu2')
        contenant.appendChild(rouge)
        i += 1
        document.querySelector('.btn-success').innerText = "Nombre de clics " + i
    }

}