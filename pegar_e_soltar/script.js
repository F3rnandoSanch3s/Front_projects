const cheio = document.querySelector('.cheio')
const vazios = document.querySelectorAll('.vazio')

cheio.addEventListener('dragstart', comeco_arrast)
cheio.addEventListener('dragend', fim_arrast)

for (const vazio of vazios) {
    vazio.addEventListener('dragover', arrast_sobre)
    vazio.addEventListener('dragenter', arrast_entrar)
    vazio.addEventListener('dragleave', arrast_deixar)
    vazio.addEventListener('drop', arrast_cair)
}

function comeco_arrast() {
    this.classList.add('segurar');
}

function fim_arrast() {
    this.classList.remove('segurar');
}

function arrast_sobre(e) {
    e.preventDefault();
}

function arrast_entrar() {
    this.classList.add('pairado');
}

function arrast_deixar() {
    this.classList.remove('pairado');
}

function arrast_cair() {
    this.classList.remove('pairado');
    this.appendChild(cheio);
}