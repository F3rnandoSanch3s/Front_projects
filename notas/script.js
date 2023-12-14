const adicaoBtn = document.getElementById('add')

// Recupera notas do armazenamento local e converte para array
const notas = JSON.parse(localStorage.getItem('notes'))

// Se existirem notas, adiciona cada nota usando a função addNovaNota
if (notas) {
    notas.forEach(nota => addNovaNota(nota))
}

// Adiciona um ouvinte de evento de clique ao botão de adição
adicaoBtn.addEventListener('click', () => addNovaNota())

// Função para adicionar uma nova nota
function addNovaNota(text = '') {
    // Cria um novo elemento div para representar a nota
    const nota = document.createElement('div')
    nota.classList.add('note')

    // Adiciona HTML à nota, incluindo ferramentas (editar e excluir) e área de texto
    nota.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    // Obtém referências aos elementos dentro da nota
    const editaBtn = nota.querySelector('.edit')
    const deleteBtn = nota.querySelector('.delete')
    const main = nota.querySelector('.main')
    const AreaTexto = nota.querySelector('textarea')

    // Define o valor da área de texto como o texto fornecido (ou vazio)
    AreaTexto.value = text

    // Converte o texto formatado para HTML usando a biblioteca "marked"
    main.innerHTML = marked(text)

    // Adiciona um ouvinte de evento de clique para o botão de exclusão
    deleteBtn.addEventListener('click', () => {
        // Remove a nota do DOM
        nota.remove()

        // Atualiza o armazenamento local após a exclusão
        updateLS()
    })

    // Adiciona um ouvinte de evento de clique para o botão de edição
    editaBtn.addEventListener('click', () => {
        // Alterna a visibilidade entre a visualização principal e a área de texto
        main.classList.toggle('hidden')
        AreaTexto.classList.toggle('hidden')
    })

    // Adiciona um ouvinte de evento de entrada para a área de texto
    AreaTexto.addEventListener('input', (e) => {
        // Atualiza a visualização principal com o texto formatado
        main.innerHTML = marked(e.target.value)

        // Atualiza o armazenamento local com as alterações
        updateLS()
    })

    // Adiciona a nota ao corpo do documento
    document.body.appendChild(nota)
}

// Atualiza o armazenamento local com as informações mais recentes das notas
function updateLS() {
    // Obtém todas as áreas de texto presentes no documento
    const TextoNotas = document.querySelectorAll('textarea')

    // Cria um array para armazenar os valores das áreas de texto
    const notas = []

    // Para cada área de texto, adiciona seu valor ao array
    TextoNotas.forEach(nota => notas.push(nota.value))

    // Atualiza o armazenamento local com o array de valores em formato JSON
    localStorage.setItem('notes', JSON.stringify(notas))
}
























































































