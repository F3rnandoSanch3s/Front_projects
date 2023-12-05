const paineis = document.querySelectorAll('.painel');

paineis.forEach(painel => {
    painel.addEventListener('click', () => {
        removerClassesAtivas();
        painel.classList.add('ativo');
    });
});

function removerClassesAtivas() {
    paineis.forEach(painel => {
        painel.classList.remove('ativo');
    });
}
