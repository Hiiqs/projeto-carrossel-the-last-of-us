let botoesCarrossel = document.querySelectorAll('.botao');
let imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', (e) => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        e.target.classList.add('selecionado');

        const imagemSelecionada = document.querySelector('.ativa');
        imagemSelecionada.classList.remove('ativa')
        imagens[indice].classList.add('ativa')
    })
})
