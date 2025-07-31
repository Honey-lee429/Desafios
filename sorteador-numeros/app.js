let quantidadeInput = document.getElementById('quantidade');
let deInput = document.getElementById('de');
let ateInput = document.getElementById('ate');
let numerosSorteados = document.getElementById('resultado');

/* Adiciona ouvintes de evento para cada input
quantidadeInput.addEventListener('input', () => {
    const valor = parseInt(quantidadeInput.value);
    if (isNaN(valor) || valor <= 0) {
      console.warn('Quantidade inválida:', quantidadeInput.value);
    } else {
      console.log('Quantidade válida:', valor);
    }
  });
  */
    

  function sortear() {
        let qt = parseInt(quantidadeInput.value);
        let de = parseInt(deInput.value);
        let ate = parseInt(ateInput.value);
      
        if (isNaN(qt) || isNaN(de) || isNaN(ate) || qt <= 0 || de >= ate) {
            numerosSorteados.textContent = 'Valores inválidos. Verifique os campos.';
            return;
        }

        // Set garante que os números sorteados sejam únicos
        let numeros = new Set();
        while (numeros.size < qt) {
            let numeroAleatorio = Math.floor(Math.random() * (ate - de + 1)) + de;
            numeros.add(numeroAleatorio);
        }

        const resultadoFinal = Array.from(numeros).sort((a, b) => a - b);
       numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${resultadoFinal.join(', ')} </label>`;
       alterarStatusBotaoReiniciar();

    }

function alterarStatusBotaoReiniciar() {
    const botao = document.getElementById('btn-reiniciar');
    botao.classList.toggle('container__botao');
    botao.classList.toggle('container__botao-desabilitado');
}
    


  
    function reiniciar() {
        quantidadeInput.value = '';
        deInput.value = '';
        ateInput.value = '';
        numerosSorteados.innerHTML = '<label class="texto__paragrafo">Sorteio reiniciado, inicie um novo </label>';
        alterarStatusBotaoReiniciar();
        console.log('Campos reiniciados.');
    }
    


