const esquerda = document.querySelector('.esquerda')
const direita = document.querySelector('.direita')
const container = document.querySelector('.container')

esquerda.addEventListener('mouseenter', () => container.classList.add('hover-esquerda'))
esquerda.addEventListener('mouseleave', () => container.classList.remove('hover-esquerda'))

direita.addEventListener('mouseenter', () => container.classList.add('hover-direita'))
direita.addEventListener('mouseleave', () => container.classList.remove('hover-direita'))