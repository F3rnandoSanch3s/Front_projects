const progresso = document.getElementById('progresso')
const voltar = document.getElementById('voltar')
const avancar = document.getElementById('avancar')
const circulo = document.querySelectorAll('.circulo')

let ativoAtual = 1

avancar.addEventListener('click', () => {
    ativoAtual++

    if(ativoAtual > circulo.length) {
        ativoAtual = circulo.length
    }

    atualizacao()
})

voltar.addEventListener('click', () => {
    ativoAtual--

    if(ativoAtual < 1) {
        ativoAtual = 1
    }

    atualizacao()
})

function atualizacao() {
    circulo.forEach((circulo, index) => {
        if(index < ativoAtual) {
            circulo.classList.add('ativo')
        } else {
            circulo.classList.remove('ativo')
        }
    })

    const ativo = document.querySelectorAll('.ativo')

    progresso.style.width = (ativo.length - 1) / (circulo.length - 1) * 100 + '%'

    if(ativoAtual == 1) {
        voltar.disabled = false
    } else if(currentActive === circulo.length) {
        avancar.disabled = true
    } else {
        voltar.disabled = false
        avancar.disabled = false
    }
}
