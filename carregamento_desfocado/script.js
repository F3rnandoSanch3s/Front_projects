const carregamento = document.querySelector('.carregamento')
const bg = document.querySelector('.bg')

let carregar = 0

let int = setInterval(desfoque, 30)

function desfoque() {
  carregar++

  if (carregar > 99) {
    clearInterval(int)
  }

  carregamento.innerText = `${carregar}%`
  carregamento.style.opacity = escala(carregar, 0, 100, 1, 0)
  bg.style.filter = `blur(${escala(carregar, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const escala = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}