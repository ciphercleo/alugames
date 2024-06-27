function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você realmente deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            imprimirJogosAlugados(); // Chama a função para imprimir a quantidade de jogos alugados
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imprimirJogosAlugados(); // Chama a função para imprimir a quantidade de jogos alugados
    }
}

function imprimirJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Jogos alugados: ${jogosAlugados}`);
}

function verificarPalindromo(texto) {
    texto = texto.toLowerCase().replace(/[\W_]/g, ''); // Remove caracteres não alfanuméricos
    let textoInvertido = texto.split('').reverse().join('');
    return texto === textoInvertido;
}

function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}
