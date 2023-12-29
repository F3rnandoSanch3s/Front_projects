const botao_abrir = document.querySelector('.botao_abrir')
const botao_fechar = document.querySelector('.botao_fechar')
const navegacao = document.querySelectorAll('.navegacao')

botao_abrir.addEventListener('click', () => {
    navegacao.forEach(nav_el => nav_el.classList.add('visible'))
})

botao_fechar.addEventListener('click', () => {
    navegacao.forEach(nav_el => nav_el.classList.remove('visible'))
})