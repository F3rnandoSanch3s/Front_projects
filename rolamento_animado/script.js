const caixas = document.querySelectorAll('.caixa')

window.addEventListener('scroll', checarCaixas)

checarCaixas()

function checarCaixas(){
    const gatilho = window.innerHeight / 5 * 4

    caixas.forEach(caixa => {
        const caixaTopo = caixa.getBoundingClientRect().top

        if(caixaTopo < gatilho){
            caixa.classList.add('mostrar')
        }else{
            caixa.classList.remove('mostrar')
        }
    })
}