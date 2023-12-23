const elementoHora = document.querySelector('.hora')
const elementoMinuto = document.querySelector('.minuto')
const elementoSegundo = document.querySelector('.segundo')
const elementoTempo = document.querySelector('.tempo')
const elementoData = document.querySelector('.data')
const alternar = document.querySelector('.alternar')

const dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "SEEEXTOOOU", "Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

alternar.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function trocarTempo() {
    const tempo = new Date();
    const mes = tempo.getMonth()
    const dia = tempo.getDay()
    const data = tempo.getDate()
    const horas = tempo.getHours()
    const horasDoRelogio = horas >= 13 ? horas % 12 : horas;
    const minutos = tempo.getMinutes()
    const segundos = tempo.getSeconds()
    const ampm = horas >= 12 ? 'PM' : 'AM'

    elementoHora.style.transform = `translate(-50%, -100%) rotate(${scale(horasDoRelogio, 0, 12, 0, 360)}deg)`
    elementoMinuto.style.transform = `translate(-50%, -100%) rotate(${scale(minutos, 0, 60, 0, 360)}deg)`
    elementoSegundo.style.transform = `translate(-50%, -100%) rotate(${scale(segundos, 0, 60, 0, 360)}deg)`

    elementoTempo.innerHTML = `${horasDoRelogio}:${minutos < 10 ? `0${minutos}` : minutos} ${ampm}`
    elementoData.innerHTML = `${dias[dia]}, ${meses[mes]} <span class="circle">${data}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

trocarTempo()

setInterval(trocarTempo, 1000)










































































