// variável "numero"
let numero = 0

// Funções dos botões de diminuir/resetar/aumentar
function diminuir5() {
    numero = numero - 5
    render()
}

function diminuir() {
    numero--
    render()
}

function resetar() {
    const p = document.querySelector("p")
    p.innerText = numero = 0
}

function aumentar() {
    numero++
    render()
}

function aumentar5() {
    numero = numero + 5
    render()
}
           
// Função que atualiza o estado da aplicação
function render() {
    const p = document.querySelector("p")
    p.innerText = numero
}