const canvas = document.getElementById('canvas');
const aumentarBtn = document.getElementById('aumentar');
const diminuirBtn = document.getElementById('diminuir');
const tamanhoEL = document.getElementById('tamanho');
const colorEl = document.getElementById('color');
const limparEl = document.getElementById('limpar');

const ctx = canvas.getContext('2d');

let tamanho = 10
let pressionado = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

canvas.addEventListener('mousedown', (e) => {
    pressionado = true

    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    pressionado = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(pressionado) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        circulo(x2, y2)
        linha(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function circulo(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, tamanho, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function linha(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = tamanho * 2
    ctx.stroke()
}

function mudarTamanho() {
    tamanhoEL.innerText = tamanho
}

aumentarBtn.addEventListener('click', () => {
    tamanho += 1

    if(tamanho > 50) {
        tamanho = 50
    }

    mudarTamanho()
})

diminuirBtn.addEventListener('click', () => {
    tamanho -= 1

    if(tamanho < 1) {
        tamanho = 1
    }

    mudarTamanho()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

limparEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))