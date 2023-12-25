const botao = document.querySelectorAll('.ondulacao')

botao.forEach(bota => {
    bota.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const botaoini = e.target.offsetTop
        const botaoesq = e.target.offsetLeft

        const xdentro = x - botaoesq
        const ydentro = y - botaoini

        const circulo = document.createElement('span')
        circulo.classList.add('circle')
        circulo.style.top = ydentro + 'px'
        circulo.style.left = xdentro + 'px'

        this.appendChild(circulo)

        setTimeout(() => circulo.remove(), 500)
    })
})